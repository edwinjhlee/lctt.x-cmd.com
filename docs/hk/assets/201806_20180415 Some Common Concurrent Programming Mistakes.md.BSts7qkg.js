import{_ as i,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"一些常見的併發編程錯誤 | LCTT x X-CMD","titleTemplate":false,"description":"一些常見的併發編程錯誤 | LCTT (201806) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一些常見的併發編程錯誤 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一些常見的併發編程錯誤 | LCTT (201806) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201806/20180415 Some Common Concurrent Programming Mistakes","title":"一些常見的併發編程錯誤","tag":"201806","desc":""},"relativePath":"201806/20180415 Some Common Concurrent Programming Mistakes.md","filePath":"[post].md"}'),u={name:"201806/20180415 Some Common Concurrent Programming Mistakes.md"};function c(g,s,m,f,k,b){const p=o("Link");return d(),r("div",null,[s[94]||(s[94]=a("h1",{id:"一些常見的併發編程錯誤",tabindex:"-1"},[n("一些常見的併發編程錯誤 "),a("a",{class:"header-anchor",href:"#一些常見的併發編程錯誤","aria-label":"Permalink to “一些常見的併發編程錯誤”"},"​")],-1)),a("p",null,[s[4]||(s[4]=n("Go 是一個內置支持併發編程的語言。藉助使用 ",-1)),s[5]||(s[5]=a("code",null,"go",-1)),s[6]||(s[6]=n(" 關鍵字去創建",-1)),s[7]||(s[7]=a("ruby",null,[n("協程"),a("rt",null,"goroutine")],-1)),s[8]||(s[8]=n("（輕量級線程）和在 Go 中提供的 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html"},{default:l(()=>[...s[0]||(s[0]=[n("使用",-1)])]),_:1}),s[9]||(s[9]=n(" ",-1)),e(p,{href:"https://go101.org/article/channel.html"},{default:l(()=>[...s[1]||(s[1]=[n("信道",-1)])]),_:1}),s[10]||(s[10]=n(" 和 ",-1)),e(p,{href:"https://go101.org/article/concurrent-atomic-operation.html"},{default:l(()=>[...s[2]||(s[2]=[n("其它的併發",-1)])]),_:1}),s[11]||(s[11]=n(" ",-1)),e(p,{href:"https://go101.org/article/concurrent-synchronization-more.html"},{default:l(()=>[...s[3]||(s[3]=[n("同步方法",-1)])]),_:1}),s[12]||(s[12]=n("，使得併發編程變得很容易、很靈活和很有趣。",-1))]),s[95]||(s[95]=a("p",null,"另一方面，Go 並不會阻止一些因 Go 程序員粗心大意或者缺乏經驗而造成的併發編程錯誤。在本文的下面部分將展示一些在 Go 編程中常見的併發編程錯誤，以幫助 Go 程序員們避免再犯類似的錯誤。",-1)),s[96]||(s[96]=a("h3",{id:"需要同步的時候沒有同步",tabindex:"-1"},[n("需要同步的時候沒有同步 "),a("a",{class:"header-anchor",href:"#需要同步的時候沒有同步","aria-label":"Permalink to “需要同步的時候沒有同步”"},"​")],-1)),a("p",null,[s[14]||(s[14]=n("代碼行或許 ",-1)),e(p,{href:"https://go101.org/article/memory-model.html"},{default:l(()=>[...s[13]||(s[13]=[n("不是按出現的順序運行的",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[97]||(s[97]=a("p",null,"在下面的程序中有兩個錯誤。",-1)),a("ul",null,[s[37]||(s[37]=a("li",null,[n("第一，在 "),a("code",null,"main"),n(" 協程中讀取 "),a("code",null,"b"),n(" 和在新的 協程 中寫入 "),a("code",null,"b"),n(" 可能導致數據爭用。")],-1)),a("li",null,[s[17]||(s[17]=n("第二，條件 ",-1)),s[18]||(s[18]=a("code",null,"b == true",-1)),s[19]||(s[19]=n(" 並不能保證在 ",-1)),s[20]||(s[20]=a("code",null,"main",-1)),s[21]||(s[21]=n(" 協程 中的 ",-1)),s[22]||(s[22]=a("code",null,"a != nil",-1)),s[23]||(s[23]=n("。在新的協程中編譯器和 CPU 可能會通過 ",-1)),e(p,{href:"https://go101.org/article/memory-model.html"},{default:l(()=>[...s[16]||(s[16]=[n("重排序指令",-1)])]),_:1}),s[24]||(s[24]=n(" 進行優化，因此，在運行時 ",-1)),s[25]||(s[25]=a("code",null,"b",-1)),s[26]||(s[26]=n(" 賦值可能發生在 ",-1)),s[27]||(s[27]=a("code",null,"a",-1)),s[28]||(s[28]=n(" 賦值之前，在 ",-1)),s[29]||(s[29]=a("code",null,"main",-1)),s[30]||(s[30]=n(" 協程 中當 ",-1)),s[31]||(s[31]=a("code",null,"a",-1)),s[32]||(s[32]=n(" 被修改後，它將會讓部分 ",-1)),s[33]||(s[33]=a("code",null,"a",-1)),s[34]||(s[34]=n(" 一直保持為 ",-1)),s[35]||(s[35]=a("code",null,"nil",-1)),s[36]||(s[36]=n("。",-1))])]),s[98]||(s[98]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>	&quot;runtime&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var a []int // nil</span></span>
<span class="line"><span>	var b bool  // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// a new goroutine</span></span>
<span class="line"><span>	go func () {</span></span>
<span class="line"><span>		a = make([]int, 3)</span></span>
<span class="line"><span>		b = true // write b</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for !b { // read b</span></span>
<span class="line"><span>		time.Sleep(time.Second)</span></span>
<span class="line"><span>		runtime.Gosched()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	a[0], a[1], a[2] = 0, 1, 2 // might panic</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的程序或者在一台計算機上運行的很好，但是在另一台上可能會引發異常。或者它可能運行了 <em>N</em> 次都很好，但是可能在第 <em>(N+1)</em> 次引發了異常。</p><p>我們將使用 <code>sync</code> 標準包中提供的信道或者同步方法去確保內存中的順序。例如，</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var a []int = nil</span></span>
<span class="line"><span>	c := make(chan struct{})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// a new goroutine</span></span>
<span class="line"><span>	go func () {</span></span>
<span class="line"><span>		a = make([]int, 3)</span></span>
<span class="line"><span>		c &lt;- struct{}{}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;-c</span></span>
<span class="line"><span>	a[0], a[1], a[2] = 0, 1, 2</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用-time-sleep-調用去做同步" tabindex="-1">使用 <code>time.Sleep</code> 調用去做同步 <a class="header-anchor" href="#使用-time-sleep-調用去做同步" aria-label="Permalink to “使用 time.Sleep 調用去做同步”">​</a></h3><p>我們先來看一個簡單的例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var x = 123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		x = 789 // write x</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	time.Sleep(time.Second)</span></span>
<span class="line"><span>	fmt.Println(x) // read x</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們預期程序將打印出 <code>789</code>。如果我們運行它，通常情況下，它確定打印的是 <code>789</code>。但是，這個程序使用的同步方式好嗎？No！原因是 Go 運行時並不保證 <code>x</code> 的寫入一定會發生在 <code>x</code> 的讀取之前。在某些條件下，比如在同一個操作系統上，大部分 CPU 資源被其它運行的程序所佔用的情況下，寫入 <code>x</code> 可能就會發生在讀取 <code>x</code> 之後。這就是為什麼我們在正式的項目中，從來不使用 <code>time.Sleep</code> 調用去實現同步的原因。</p><p>我們來看一下另外一個示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var x = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var num = 123</span></span>
<span class="line"><span>	var p = &amp;num</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	c := make(chan int)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		c &lt;- *p + x</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	time.Sleep(time.Second)</span></span>
<span class="line"><span>	num = 789</span></span>
<span class="line"><span>	fmt.Println(&lt;-c)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你認為程序的預期輸出是什麼？<code>123</code> 還是 <code>789</code>？事實上它的輸出與編譯器有關。對於標準的 Go 編譯器 1.10 來説，這個程序很有可能輸出是 <code>123</code>。但是在理論上，它可能輸出的是 <code>789</code>，或者其它的隨機數。</p><p>現在，我們來改變 <code>c &lt;- *p + x</code> 為 <code>c &lt;- *p</code>，然後再次運行這個程序。你將會發現輸出變成了 <code>789</code> （使用標準的 Go 編譯器 1.10）。這再次説明它的輸出是與編譯器相關的。</p><p>是的，在上面的程序中存在數據爭用。表達式 <code>*p</code> 可能會被先計算、後計算、或者在處理賦值語句 <code>num = 789</code> 時計算。<code>time.Sleep</code> 調用並不能保證 <code>*p</code> 發生在賦值語句處理之前進行。</p><p>對於這個特定的示例，我們將在新的協程創建之前，將值保存到一個臨時值中，然後在新的協程中使用臨時值去消除數據爭用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>	tmp := *p + x</span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		c &lt;- tmp</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="使協程掛起" tabindex="-1">使協程掛起 <a class="header-anchor" href="#使協程掛起" aria-label="Permalink to “使協程掛起”">​</a></h3><p>掛起協程是指讓協程一直處於阻塞狀態。導致協程被掛起的原因很多。比如，</p><ul><li>一個協程嘗試從一個 nil 信道中或者從一個沒有其它協程給它發送值的信道中檢索數據。</li><li>一個協程嘗試去發送一個值到 nil 信道，或者發送到一個沒有其它的協程接收值的信道中。</li><li>一個協程被它自己死鎖。</li><li>一組協程彼此死鎖。</li><li>當運行一個沒有 <code>default</code> 分支的 <code>select</code> 代碼塊時，一個協程被阻塞，以及在 <code>select</code> 代碼塊中  <code>case</code> 關鍵字後的所有信道操作保持阻塞狀態。</li></ul><p>除了有時我們為了避免程序退出，特意讓一個程序中的 <code>main</code> 協程保持掛起之外，大多數其它的協程掛起都是意外情況。Go 運行時很難判斷一個協程到底是處於掛起狀態還是臨時阻塞。因此，Go 運行時並不會去釋放一個掛起的協程所佔用的資源。</p>`,19)),a("p",null,[s[39]||(s[39]=n("在 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#first-response-wins"},{default:l(()=>[...s[38]||(s[38]=[n("誰先響應誰獲勝",-1)])]),_:1}),s[40]||(s[40]=n(" 的信道使用案例中，如果使用的 future 信道容量不夠大，當嘗試向 Future 信道發送結果時，一些響應較慢的信道將被掛起。比如，如果調用下面的函數，將有 4 個協程處於永遠阻塞狀態。",-1))]),s[99]||(s[99]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func request() int {</span></span>
<span class="line"><span>	c := make(chan int)</span></span>
<span class="line"><span>	for i := 0; i &lt; 5; i++ {</span></span>
<span class="line"><span>		i := i</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			c &lt;- i // 4 goroutines will hang here.</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &lt;-c</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>為避免這 4 個協程一直處於掛起狀態， <code>c</code> 信道的容量必須至少是  <code>4</code>。</p>`,2)),a("p",null,[s[42]||(s[42]=n("在 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#first-response-wins-2"},{default:l(()=>[...s[41]||(s[41]=[n("實現誰先響應誰獲勝的第二種方法",-1)])]),_:1}),s[43]||(s[43]=n(" 的信道使用案例中，如果將 future 信道用做非緩衝信道，那麼有可能這個信息將永遠也不會有響應而掛起。例如，如果在一個協程中調用下面的函數，協程可能會掛起。原因是，如果接收操作  ",-1)),s[44]||(s[44]=a("code",null,"<-c",-1)),s[45]||(s[45]=n(" 準備就緒之前，五個發送操作全部嘗試發送，那麼所有的嘗試發送的操作將全部失敗，因此那個調用者協程將永遠也不會接收到值。",-1))]),s[100]||(s[100]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func request() int {</span></span>
<span class="line"><span>	c := make(chan int)</span></span>
<span class="line"><span>	for i := 0; i &lt; 5; i++ {</span></span>
<span class="line"><span>		i := i</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			select {</span></span>
<span class="line"><span>			case c &lt;- i:</span></span>
<span class="line"><span>			default:</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &lt;-c</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>將信道 <code>c</code> 變成緩衝信道將保證五個發送操作中的至少一個操作會發送成功，這樣，上面函數中的那個調用者協程將不會被掛起。</p><h3 id="在-sync-標準包中拷貝類型值" tabindex="-1">在 <code>sync</code> 標準包中拷貝類型值 <a class="header-anchor" href="#在-sync-標準包中拷貝類型值" aria-label="Permalink to “在 sync 標準包中拷貝類型值”">​</a></h3><p>在實踐中，<code>sync</code> 標準包中的類型值不會被拷貝。我們應該只拷貝這個值的指針。</p><p>下面是一個錯誤的併發編程示例。在這個示例中，當調用 <code>Counter.Value</code> 方法時，將拷貝一個 <code>Counter</code> 接收值。作為接收值的一個字段，<code>Counter</code> 接收值的各個 <code>Mutex</code> 字段也會被拷貝。拷貝不是同步發生的，因此，拷貝的 <code>Mutex</code> 值可能會出錯。即便是沒有錯誤，拷貝的 <code>Counter</code> 接收值的訪問保護也是沒有意義的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import &quot;sync&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Counter struct {</span></span>
<span class="line"><span>	sync.Mutex</span></span>
<span class="line"><span>	n int64</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// This method is okay.</span></span>
<span class="line"><span>func (c *Counter) Increase(d int64) (r int64) {</span></span>
<span class="line"><span>	c.Lock()</span></span>
<span class="line"><span>	c.n += d</span></span>
<span class="line"><span>	r = c.n</span></span>
<span class="line"><span>	c.Unlock()</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// The method is bad. When it is called, a Counter</span></span>
<span class="line"><span>// receiver value will be copied.</span></span>
<span class="line"><span>func (c Counter) Value() (r int64) {</span></span>
<span class="line"><span>	c.Lock()</span></span>
<span class="line"><span>	r = c.n</span></span>
<span class="line"><span>	c.Unlock()</span></span>
<span class="line"><span>	return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們只需要改變 <code>Value</code> 接收類型方法為指針類型 <code>*Counter</code>，就可以避免拷貝 <code>Mutex</code> 值。</p><p>在官方的 Go SDK 中提供的 <code>go vet</code> 命令將會報告潛在的錯誤值拷貝。</p><h3 id="在錯誤的地方調用-sync-waitgroup-的方法" tabindex="-1">在錯誤的地方調用 <code>sync.WaitGroup</code> 的方法 <a class="header-anchor" href="#在錯誤的地方調用-sync-waitgroup-的方法" aria-label="Permalink to “在錯誤的地方調用 sync.WaitGroup 的方法”">​</a></h3><p>每個 <code>sync.WaitGroup</code> 值維護一個內部計數器，這個計數器的初始值為 0。如果一個 <code>WaitGroup</code> 計數器的值是 0，調用 <code>WaitGroup</code> 值的 <code>Wait</code> 方法就不會被阻塞，否則，在計數器值為 0 之前，這個調用會一直被阻塞。</p><p>為了讓 <code>WaitGroup</code> 值的使用有意義，當一個 <code>WaitGroup</code> 計數器值為 0 時，必須在相應的 <code>WaitGroup</code> 值的  <code>Wait</code> 方法調用之前，去調用 <code>WaitGroup</code> 值的 <code>Add</code> 方法。</p><p>例如，下面的程序中，在不正確位置調用了 <code>Add</code> 方法，這將使最後打印出的數字不總是 <code>100</code>。事實上，這個程序最後打印的數字可能是在 <code>[0, 100)</code> 範圍內的一個隨意數字。原因就是 <code>Add</code> 方法的調用並不保證一定會發生在 <code>Wait</code> 方法調用之前。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;sync&quot;</span></span>
<span class="line"><span>	&quot;sync/atomic&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var wg sync.WaitGroup</span></span>
<span class="line"><span>	var x int32 = 0</span></span>
<span class="line"><span>	for i := 0; i &lt; 100; i++ {</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			wg.Add(1)</span></span>
<span class="line"><span>			atomic.AddInt32(&amp;x, 1)</span></span>
<span class="line"><span>			wg.Done()</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(&quot;To wait ...&quot;)</span></span>
<span class="line"><span>	wg.Wait()</span></span>
<span class="line"><span>	fmt.Println(atomic.LoadInt32(&amp;x))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>為讓程序的表現符合預期，在 <code>for</code> 循環中，我們將把 <code>Add</code> 方法的調用移動到創建的新協程的範圍之外，修改後的代碼如下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>	for i := 0; i &lt; 100; i++ {</span></span>
<span class="line"><span>		wg.Add(1)</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			atomic.AddInt32(&amp;x, 1)</span></span>
<span class="line"><span>			wg.Done()</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="不正確使用-futures-信道" tabindex="-1">不正確使用 futures 信道 <a class="header-anchor" href="#不正確使用-futures-信道" aria-label="Permalink to “不正確使用 futures 信道”">​</a></h3>`,16)),a("p",null,[s[48]||(s[48]=n("在 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html"},{default:l(()=>[...s[46]||(s[46]=[n("信道使用案例",-1)])]),_:1}),s[49]||(s[49]=n(" 的文章中，我們知道一些函數將返回 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#future-promise"},{default:l(()=>[...s[47]||(s[47]=[n("futures 信道",-1)])]),_:1}),s[50]||(s[50]=n("。假設 ",-1)),s[51]||(s[51]=a("code",null,"fa",-1)),s[52]||(s[52]=n(" 和 ",-1)),s[53]||(s[53]=a("code",null,"fb",-1)),s[54]||(s[54]=n(" 就是這樣的兩個函數，那麼下面的調用就使用了不正確的 future 參數。",-1))]),s[101]||(s[101]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>doSomethingWithFutureArguments(&lt;-fa(), &lt;-fb())</span></span></code></pre></div><p>在上面的代碼行中，兩個信道接收操作是順序進行的，而不是併發的。我們做如下修改使它變成併發操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ca, cb := fa(), fb()</span></span>
<span class="line"><span>doSomethingWithFutureArguments(&lt;-c1, &lt;-c2)</span></span></code></pre></div><h3 id="沒有等協程的最後的活動的發送結束就關閉信道" tabindex="-1">沒有等協程的最後的活動的發送結束就關閉信道 <a class="header-anchor" href="#沒有等協程的最後的活動的發送結束就關閉信道" aria-label="Permalink to “沒有等協程的最後的活動的發送結束就關閉信道”">​</a></h3><p>Go 程序員經常犯的一個錯誤是，還有一些其它的協程可能會發送值到以前的信道時，這個信道就已經被關閉了。當這樣的發送（發送到一個已經關閉的信道）真實發生時，將引發一個異常。</p>`,5)),a("p",null,[s[57]||(s[57]=n("這種錯誤在一些以往的著名 Go 項目中也有發生，比如在 Kubernetes 項目中的 ",-1)),e(p,{href:"https://github.com/kubernetes/kubernetes/pull/45291/files?diff=split"},{default:l(()=>[...s[55]||(s[55]=[n("這個 bug",-1)])]),_:1}),s[58]||(s[58]=n(" 和 ",-1)),e(p,{href:"https://github.com/kubernetes/kubernetes/pull/39479/files?diff=split"},{default:l(()=>[...s[56]||(s[56]=[n("這個 bug",-1)])]),_:1}),s[59]||(s[59]=n("。",-1))]),a("p",null,[s[61]||(s[61]=n("如何安全和優雅地關閉信道，請閲讀 ",-1)),e(p,{href:"https://go101.org/article/channel-closing.html"},{default:l(()=>[...s[60]||(s[60]=[n("這篇文章",-1)])]),_:1}),s[62]||(s[62]=n("。",-1))]),s[102]||(s[102]=a("h3",{id:"在值上做-64-位原子操作時沒有保證值地址-64-位對齊",tabindex:"-1"},[n("在值上做 64 位原子操作時沒有保證值地址 64 位對齊 "),a("a",{class:"header-anchor",href:"#在值上做-64-位原子操作時沒有保證值地址-64-位對齊","aria-label":"Permalink to “在值上做 64 位原子操作時沒有保證值地址 64 位對齊”"},"​")],-1)),a("p",null,[s[64]||(s[64]=n("到目前為止（Go 1.10），在標準的 Go 編譯器中，在一個 64 位原子操作中涉及到的值的地址要求必須是 64 位對齊的。如果沒有對齊則導致當前的協程異常。對於標準的 Go 編譯器來説，這種失敗僅發生在 32 位的架構上。請閲讀 ",-1)),e(p,{href:"https://go101.org/article/memory-layout.html"},{default:l(()=>[...s[63]||(s[63]=[n("內存佈局",-1)])]),_:1}),s[65]||(s[65]=n(" 去了解如何在一個 32 位操作系統上保證 64 位對齊。",-1))]),s[103]||(s[103]=a("h3",{id:"沒有注意到大量的資源被-time-after-函數調用佔用",tabindex:"-1"},[n("沒有注意到大量的資源被 "),a("code",null,"time.After"),n(" 函數調用佔用 "),a("a",{class:"header-anchor",href:"#沒有注意到大量的資源被-time-after-函數調用佔用","aria-label":"Permalink to “沒有注意到大量的資源被 time.After 函數調用佔用”"},"​")],-1)),a("p",null,[s[67]||(s[67]=n("在 ",-1)),s[68]||(s[68]=a("code",null,"time",-1)),s[69]||(s[69]=n(" 標準包中的 ",-1)),s[70]||(s[70]=a("code",null,"After",-1)),s[71]||(s[71]=n(" 函數返回 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#timer"},{default:l(()=>[...s[66]||(s[66]=[n("一個延遲通知的信道",-1)])]),_:1}),s[72]||(s[72]=n("。這個函數在某些情況下用起來很便捷，但是，每次調用它將創建一個 ",-1)),s[73]||(s[73]=a("code",null,"time.Timer",-1)),s[74]||(s[74]=n(" 類型的新值。這個新創建的 ",-1)),s[75]||(s[75]=a("code",null,"Timer",-1)),s[76]||(s[76]=n(" 值在通過傳遞參數到  ",-1)),s[77]||(s[77]=a("code",null,"After",-1)),s[78]||(s[78]=n(" 函數指定期間保持激活狀態，如果在這個期間過多的調用了該函數，可能會有太多的 ",-1)),s[79]||(s[79]=a("code",null,"Timer",-1)),s[80]||(s[80]=n(" 值保持激活，這將佔用大量的內存和計算資源。",-1))]),s[104]||(s[104]=t(`<p>例如，如果調用了下列的 <code>longRunning</code> 函數，將在一分鐘內產生大量的消息，然後在某些週期內將有大量的 <code>Timer</code> 值保持激活，即便是大量的這些 <code>Timer</code> 值已經沒用了也是如此。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// The function will return if a message arrival interval</span></span>
<span class="line"><span>// is larger than one minute.</span></span>
<span class="line"><span>func longRunning(messages &lt;-chan string) {</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		select {</span></span>
<span class="line"><span>		case &lt;-time.After(time.Minute):</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		case msg := &lt;-messages:</span></span>
<span class="line"><span>			fmt.Println(msg)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>為避免在上述代碼中創建過多的 <code>Timer</code> 值，我們將使用一個單一的 <code>Timer</code> 值去完成同樣的任務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func longRunning(messages &lt;-chan string) {</span></span>
<span class="line"><span>	timer := time.NewTimer(time.Minute)</span></span>
<span class="line"><span>	defer timer.Stop()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		select {</span></span>
<span class="line"><span>		case &lt;-timer.C:</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		case msg := &lt;-messages:</span></span>
<span class="line"><span>			fmt.Println(msg)</span></span>
<span class="line"><span>			if !timer.Stop() {</span></span>
<span class="line"><span>				&lt;-timer.C</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// The above &quot;if&quot; block can also be put here.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		timer.Reset(time.Minute)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="不正確地使用-time-timer-值" tabindex="-1">不正確地使用 <code>time.Timer</code> 值 <a class="header-anchor" href="#不正確地使用-time-timer-值" aria-label="Permalink to “不正確地使用 time.Timer 值”">​</a></h3><p>在最後，我們將展示一個符合語言使用習慣的 <code>time.Timer</code> 值的使用示例。需要注意的一個細節是，那個 <code>Reset</code> 方法總是在停止或者 <code>time.Timer</code> 值釋放時被使用。</p><p>在 <code>select</code> 塊的第一個 <code>case</code> 分支的結束部分，<code>time.Timer</code> 值被釋放，因此，我們不需要去停止它。但是必須在第二個分支中停止定時器。如果在第二個分支中 <code>if</code> 代碼塊缺失，它可能至少在 <code>Reset</code> 方法調用時，會（通過 Go 運行時）發送到 <code>timer.C</code> 信道，並且那個 <code>longRunning</code> 函數可能會早於預期返回，對於 <code>Reset</code> 方法來説，它可能僅僅是重置內部定時器為 0，它將不會清理（耗盡）那個發送到 <code>timer.C</code> 信道的值。</p><p>例如，下面的程序很有可能在一秒內而不是十秒時退出。並且更重要的是，這個程序並不是 DRF 的（LCTT 譯註：data race free，多線程程序的一種同步程度）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	start := time.Now()</span></span>
<span class="line"><span>	timer := time.NewTimer(time.Second/2)</span></span>
<span class="line"><span>	select {</span></span>
<span class="line"><span>	case &lt;-timer.C:</span></span>
<span class="line"><span>	default:</span></span>
<span class="line"><span>		time.Sleep(time.Second) // go here</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	timer.Reset(time.Second * 10)</span></span>
<span class="line"><span>	&lt;-timer.C</span></span>
<span class="line"><span>	fmt.Println(time.Since(start)) // 1.000188181s</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>當 <code>time.Timer</code> 的值不再被其它任何一個東西使用時，它的值可能被停留在一種非停止狀態，但是，建議在結束時停止它。</p><p>在多個協程中如果不按建議使用 <code>time.Timer</code> 值併發，可能會有 bug 隱患。</p><p>我們不應該依賴一個 <code>Reset</code> 方法調用的返回值。<code>Reset</code> 方法返回值的存在僅僅是為了兼容性目的。</p><hr>`,13)),a("p",null,[s[82]||(s[82]=n("via: ",-1)),e(p,{href:"https://go101.org/article/concurrent-common-mistakes.html"},{default:l(()=>[...s[81]||(s[81]=[n("https://go101.org/article/concurrent-common-mistakes.html",-1)])]),_:1})]),a("p",null,[s[86]||(s[86]=n("作者：",-1)),e(p,{href:"go101.org"},{default:l(()=>[...s[83]||(s[83]=[n("go101.org",-1)])]),_:1}),s[87]||(s[87]=n(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[84]||(s[84]=[n("qhwdw",-1)])]),_:1}),s[88]||(s[88]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[85]||(s[85]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[91]||(s[91]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[89]||(s[89]=[n("LCTT",-1)])]),_:1}),s[92]||(s[92]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[90]||(s[90]=[n("Linux中國",-1)])]),_:1}),s[93]||(s[93]=n(" 榮譽推出",-1))])])}const T=i(u,[["render",c]]);export{y as __pageData,T as default};
