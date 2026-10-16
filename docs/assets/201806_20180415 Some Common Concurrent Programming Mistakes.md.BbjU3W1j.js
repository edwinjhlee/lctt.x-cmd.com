import{_ as i,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"一些常见的并发编程错误 | LCTT x X-CMD","titleTemplate":false,"description":"一些常见的并发编程错误 | LCTT (201806) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一些常见的并发编程错误 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一些常见的并发编程错误 | LCTT (201806) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201806/20180415 Some Common Concurrent Programming Mistakes","title":"一些常见的并发编程错误","tag":"201806","desc":""},"relativePath":"201806/20180415 Some Common Concurrent Programming Mistakes.md","filePath":"[post].md"}'),u={name:"201806/20180415 Some Common Concurrent Programming Mistakes.md"};function c(g,s,m,f,k,b){const p=o("Link");return d(),r("div",null,[s[94]||(s[94]=a("h1",{id:"一些常见的并发编程错误",tabindex:"-1"},[n("一些常见的并发编程错误 "),a("a",{class:"header-anchor",href:"#一些常见的并发编程错误","aria-label":"Permalink to “一些常见的并发编程错误”"},"​")],-1)),a("p",null,[s[4]||(s[4]=n("Go 是一个内置支持并发编程的语言。借助使用 ",-1)),s[5]||(s[5]=a("code",null,"go",-1)),s[6]||(s[6]=n(" 关键字去创建",-1)),s[7]||(s[7]=a("ruby",null,[n("协程"),a("rt",null,"goroutine")],-1)),s[8]||(s[8]=n("（轻量级线程）和在 Go 中提供的 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html"},{default:l(()=>[...s[0]||(s[0]=[n("使用",-1)])]),_:1}),s[9]||(s[9]=n(" ",-1)),e(p,{href:"https://go101.org/article/channel.html"},{default:l(()=>[...s[1]||(s[1]=[n("信道",-1)])]),_:1}),s[10]||(s[10]=n(" 和 ",-1)),e(p,{href:"https://go101.org/article/concurrent-atomic-operation.html"},{default:l(()=>[...s[2]||(s[2]=[n("其它的并发",-1)])]),_:1}),s[11]||(s[11]=n(" ",-1)),e(p,{href:"https://go101.org/article/concurrent-synchronization-more.html"},{default:l(()=>[...s[3]||(s[3]=[n("同步方法",-1)])]),_:1}),s[12]||(s[12]=n("，使得并发编程变得很容易、很灵活和很有趣。",-1))]),s[95]||(s[95]=a("p",null,"另一方面，Go 并不会阻止一些因 Go 程序员粗心大意或者缺乏经验而造成的并发编程错误。在本文的下面部分将展示一些在 Go 编程中常见的并发编程错误，以帮助 Go 程序员们避免再犯类似的错误。",-1)),s[96]||(s[96]=a("h3",{id:"需要同步的时候没有同步",tabindex:"-1"},[n("需要同步的时候没有同步 "),a("a",{class:"header-anchor",href:"#需要同步的时候没有同步","aria-label":"Permalink to “需要同步的时候没有同步”"},"​")],-1)),a("p",null,[s[14]||(s[14]=n("代码行或许 ",-1)),e(p,{href:"https://go101.org/article/memory-model.html"},{default:l(()=>[...s[13]||(s[13]=[n("不是按出现的顺序运行的",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[97]||(s[97]=a("p",null,"在下面的程序中有两个错误。",-1)),a("ul",null,[s[37]||(s[37]=a("li",null,[n("第一，在 "),a("code",null,"main"),n(" 协程中读取 "),a("code",null,"b"),n(" 和在新的 协程 中写入 "),a("code",null,"b"),n(" 可能导致数据争用。")],-1)),a("li",null,[s[17]||(s[17]=n("第二，条件 ",-1)),s[18]||(s[18]=a("code",null,"b == true",-1)),s[19]||(s[19]=n(" 并不能保证在 ",-1)),s[20]||(s[20]=a("code",null,"main",-1)),s[21]||(s[21]=n(" 协程 中的 ",-1)),s[22]||(s[22]=a("code",null,"a != nil",-1)),s[23]||(s[23]=n("。在新的协程中编译器和 CPU 可能会通过 ",-1)),e(p,{href:"https://go101.org/article/memory-model.html"},{default:l(()=>[...s[16]||(s[16]=[n("重排序指令",-1)])]),_:1}),s[24]||(s[24]=n(" 进行优化，因此，在运行时 ",-1)),s[25]||(s[25]=a("code",null,"b",-1)),s[26]||(s[26]=n(" 赋值可能发生在 ",-1)),s[27]||(s[27]=a("code",null,"a",-1)),s[28]||(s[28]=n(" 赋值之前，在 ",-1)),s[29]||(s[29]=a("code",null,"main",-1)),s[30]||(s[30]=n(" 协程 中当 ",-1)),s[31]||(s[31]=a("code",null,"a",-1)),s[32]||(s[32]=n(" 被修改后，它将会让部分 ",-1)),s[33]||(s[33]=a("code",null,"a",-1)),s[34]||(s[34]=n(" 一直保持为 ",-1)),s[35]||(s[35]=a("code",null,"nil",-1)),s[36]||(s[36]=n("。",-1))])]),s[98]||(s[98]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>上面的程序或者在一台计算机上运行的很好，但是在另一台上可能会引发异常。或者它可能运行了 <em>N</em> 次都很好，但是可能在第 <em>(N+1)</em> 次引发了异常。</p><p>我们将使用 <code>sync</code> 标准包中提供的信道或者同步方法去确保内存中的顺序。例如，</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用-time-sleep-调用去做同步" tabindex="-1">使用 <code>time.Sleep</code> 调用去做同步 <a class="header-anchor" href="#使用-time-sleep-调用去做同步" aria-label="Permalink to “使用 time.Sleep 调用去做同步”">​</a></h3><p>我们先来看一个简单的例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们预期程序将打印出 <code>789</code>。如果我们运行它，通常情况下，它确定打印的是 <code>789</code>。但是，这个程序使用的同步方式好吗？No！原因是 Go 运行时并不保证 <code>x</code> 的写入一定会发生在 <code>x</code> 的读取之前。在某些条件下，比如在同一个操作系统上，大部分 CPU 资源被其它运行的程序所占用的情况下，写入 <code>x</code> 可能就会发生在读取 <code>x</code> 之后。这就是为什么我们在正式的项目中，从来不使用 <code>time.Sleep</code> 调用去实现同步的原因。</p><p>我们来看一下另外一个示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你认为程序的预期输出是什么？<code>123</code> 还是 <code>789</code>？事实上它的输出与编译器有关。对于标准的 Go 编译器 1.10 来说，这个程序很有可能输出是 <code>123</code>。但是在理论上，它可能输出的是 <code>789</code>，或者其它的随机数。</p><p>现在，我们来改变 <code>c &lt;- *p + x</code> 为 <code>c &lt;- *p</code>，然后再次运行这个程序。你将会发现输出变成了 <code>789</code> （使用标准的 Go 编译器 1.10）。这再次说明它的输出是与编译器相关的。</p><p>是的，在上面的程序中存在数据争用。表达式 <code>*p</code> 可能会被先计算、后计算、或者在处理赋值语句 <code>num = 789</code> 时计算。<code>time.Sleep</code> 调用并不能保证 <code>*p</code> 发生在赋值语句处理之前进行。</p><p>对于这个特定的示例，我们将在新的协程创建之前，将值保存到一个临时值中，然后在新的协程中使用临时值去消除数据争用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>	tmp := *p + x</span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		c &lt;- tmp</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="使协程挂起" tabindex="-1">使协程挂起 <a class="header-anchor" href="#使协程挂起" aria-label="Permalink to “使协程挂起”">​</a></h3><p>挂起协程是指让协程一直处于阻塞状态。导致协程被挂起的原因很多。比如，</p><ul><li>一个协程尝试从一个 nil 信道中或者从一个没有其它协程给它发送值的信道中检索数据。</li><li>一个协程尝试去发送一个值到 nil 信道，或者发送到一个没有其它的协程接收值的信道中。</li><li>一个协程被它自己死锁。</li><li>一组协程彼此死锁。</li><li>当运行一个没有 <code>default</code> 分支的 <code>select</code> 代码块时，一个协程被阻塞，以及在 <code>select</code> 代码块中  <code>case</code> 关键字后的所有信道操作保持阻塞状态。</li></ul><p>除了有时我们为了避免程序退出，特意让一个程序中的 <code>main</code> 协程保持挂起之外，大多数其它的协程挂起都是意外情况。Go 运行时很难判断一个协程到底是处于挂起状态还是临时阻塞。因此，Go 运行时并不会去释放一个挂起的协程所占用的资源。</p>`,19)),a("p",null,[s[39]||(s[39]=n("在 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#first-response-wins"},{default:l(()=>[...s[38]||(s[38]=[n("谁先响应谁获胜",-1)])]),_:1}),s[40]||(s[40]=n(" 的信道使用案例中，如果使用的 future 信道容量不够大，当尝试向 Future 信道发送结果时，一些响应较慢的信道将被挂起。比如，如果调用下面的函数，将有 4 个协程处于永远阻塞状态。",-1))]),s[99]||(s[99]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func request() int {</span></span>
<span class="line"><span>	c := make(chan int)</span></span>
<span class="line"><span>	for i := 0; i &lt; 5; i++ {</span></span>
<span class="line"><span>		i := i</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			c &lt;- i // 4 goroutines will hang here.</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return &lt;-c</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>为避免这 4 个协程一直处于挂起状态， <code>c</code> 信道的容量必须至少是  <code>4</code>。</p>`,2)),a("p",null,[s[42]||(s[42]=n("在 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#first-response-wins-2"},{default:l(()=>[...s[41]||(s[41]=[n("实现谁先响应谁获胜的第二种方法",-1)])]),_:1}),s[43]||(s[43]=n(" 的信道使用案例中，如果将 future 信道用做非缓冲信道，那么有可能这个信息将永远也不会有响应而挂起。例如，如果在一个协程中调用下面的函数，协程可能会挂起。原因是，如果接收操作  ",-1)),s[44]||(s[44]=a("code",null,"<-c",-1)),s[45]||(s[45]=n(" 准备就绪之前，五个发送操作全部尝试发送，那么所有的尝试发送的操作将全部失败，因此那个调用者协程将永远也不会接收到值。",-1))]),s[100]||(s[100]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func request() int {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>将信道 <code>c</code> 变成缓冲信道将保证五个发送操作中的至少一个操作会发送成功，这样，上面函数中的那个调用者协程将不会被挂起。</p><h3 id="在-sync-标准包中拷贝类型值" tabindex="-1">在 <code>sync</code> 标准包中拷贝类型值 <a class="header-anchor" href="#在-sync-标准包中拷贝类型值" aria-label="Permalink to “在 sync 标准包中拷贝类型值”">​</a></h3><p>在实践中，<code>sync</code> 标准包中的类型值不会被拷贝。我们应该只拷贝这个值的指针。</p><p>下面是一个错误的并发编程示例。在这个示例中，当调用 <code>Counter.Value</code> 方法时，将拷贝一个 <code>Counter</code> 接收值。作为接收值的一个字段，<code>Counter</code> 接收值的各个 <code>Mutex</code> 字段也会被拷贝。拷贝不是同步发生的，因此，拷贝的 <code>Mutex</code> 值可能会出错。即便是没有错误，拷贝的 <code>Counter</code> 接收值的访问保护也是没有意义的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import &quot;sync&quot;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们只需要改变 <code>Value</code> 接收类型方法为指针类型 <code>*Counter</code>，就可以避免拷贝 <code>Mutex</code> 值。</p><p>在官方的 Go SDK 中提供的 <code>go vet</code> 命令将会报告潜在的错误值拷贝。</p><h3 id="在错误的地方调用-sync-waitgroup-的方法" tabindex="-1">在错误的地方调用 <code>sync.WaitGroup</code> 的方法 <a class="header-anchor" href="#在错误的地方调用-sync-waitgroup-的方法" aria-label="Permalink to “在错误的地方调用 sync.WaitGroup 的方法”">​</a></h3><p>每个 <code>sync.WaitGroup</code> 值维护一个内部计数器，这个计数器的初始值为 0。如果一个 <code>WaitGroup</code> 计数器的值是 0，调用 <code>WaitGroup</code> 值的 <code>Wait</code> 方法就不会被阻塞，否则，在计数器值为 0 之前，这个调用会一直被阻塞。</p><p>为了让 <code>WaitGroup</code> 值的使用有意义，当一个 <code>WaitGroup</code> 计数器值为 0 时，必须在相应的 <code>WaitGroup</code> 值的  <code>Wait</code> 方法调用之前，去调用 <code>WaitGroup</code> 值的 <code>Add</code> 方法。</p><p>例如，下面的程序中，在不正确位置调用了 <code>Add</code> 方法，这将使最后打印出的数字不总是 <code>100</code>。事实上，这个程序最后打印的数字可能是在 <code>[0, 100)</code> 范围内的一个随意数字。原因就是 <code>Add</code> 方法的调用并不保证一定会发生在 <code>Wait</code> 方法调用之前。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>为让程序的表现符合预期，在 <code>for</code> 循环中，我们将把 <code>Add</code> 方法的调用移动到创建的新协程的范围之外，修改后的代码如下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>	for i := 0; i &lt; 100; i++ {</span></span>
<span class="line"><span>		wg.Add(1)</span></span>
<span class="line"><span>		go func() {</span></span>
<span class="line"><span>			atomic.AddInt32(&amp;x, 1)</span></span>
<span class="line"><span>			wg.Done()</span></span>
<span class="line"><span>		}()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="不正确使用-futures-信道" tabindex="-1">不正确使用 futures 信道 <a class="header-anchor" href="#不正确使用-futures-信道" aria-label="Permalink to “不正确使用 futures 信道”">​</a></h3>`,16)),a("p",null,[s[48]||(s[48]=n("在 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html"},{default:l(()=>[...s[46]||(s[46]=[n("信道使用案例",-1)])]),_:1}),s[49]||(s[49]=n(" 的文章中，我们知道一些函数将返回 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#future-promise"},{default:l(()=>[...s[47]||(s[47]=[n("futures 信道",-1)])]),_:1}),s[50]||(s[50]=n("。假设 ",-1)),s[51]||(s[51]=a("code",null,"fa",-1)),s[52]||(s[52]=n(" 和 ",-1)),s[53]||(s[53]=a("code",null,"fb",-1)),s[54]||(s[54]=n(" 就是这样的两个函数，那么下面的调用就使用了不正确的 future 参数。",-1))]),s[101]||(s[101]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>doSomethingWithFutureArguments(&lt;-fa(), &lt;-fb())</span></span></code></pre></div><p>在上面的代码行中，两个信道接收操作是顺序进行的，而不是并发的。我们做如下修改使它变成并发操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ca, cb := fa(), fb()</span></span>
<span class="line"><span>doSomethingWithFutureArguments(&lt;-c1, &lt;-c2)</span></span></code></pre></div><h3 id="没有等协程的最后的活动的发送结束就关闭信道" tabindex="-1">没有等协程的最后的活动的发送结束就关闭信道 <a class="header-anchor" href="#没有等协程的最后的活动的发送结束就关闭信道" aria-label="Permalink to “没有等协程的最后的活动的发送结束就关闭信道”">​</a></h3><p>Go 程序员经常犯的一个错误是，还有一些其它的协程可能会发送值到以前的信道时，这个信道就已经被关闭了。当这样的发送（发送到一个已经关闭的信道）真实发生时，将引发一个异常。</p>`,5)),a("p",null,[s[57]||(s[57]=n("这种错误在一些以往的著名 Go 项目中也有发生，比如在 Kubernetes 项目中的 ",-1)),e(p,{href:"https://github.com/kubernetes/kubernetes/pull/45291/files?diff=split"},{default:l(()=>[...s[55]||(s[55]=[n("这个 bug",-1)])]),_:1}),s[58]||(s[58]=n(" 和 ",-1)),e(p,{href:"https://github.com/kubernetes/kubernetes/pull/39479/files?diff=split"},{default:l(()=>[...s[56]||(s[56]=[n("这个 bug",-1)])]),_:1}),s[59]||(s[59]=n("。",-1))]),a("p",null,[s[61]||(s[61]=n("如何安全和优雅地关闭信道，请阅读 ",-1)),e(p,{href:"https://go101.org/article/channel-closing.html"},{default:l(()=>[...s[60]||(s[60]=[n("这篇文章",-1)])]),_:1}),s[62]||(s[62]=n("。",-1))]),s[102]||(s[102]=a("h3",{id:"在值上做-64-位原子操作时没有保证值地址-64-位对齐",tabindex:"-1"},[n("在值上做 64 位原子操作时没有保证值地址 64 位对齐 "),a("a",{class:"header-anchor",href:"#在值上做-64-位原子操作时没有保证值地址-64-位对齐","aria-label":"Permalink to “在值上做 64 位原子操作时没有保证值地址 64 位对齐”"},"​")],-1)),a("p",null,[s[64]||(s[64]=n("到目前为止（Go 1.10），在标准的 Go 编译器中，在一个 64 位原子操作中涉及到的值的地址要求必须是 64 位对齐的。如果没有对齐则导致当前的协程异常。对于标准的 Go 编译器来说，这种失败仅发生在 32 位的架构上。请阅读 ",-1)),e(p,{href:"https://go101.org/article/memory-layout.html"},{default:l(()=>[...s[63]||(s[63]=[n("内存布局",-1)])]),_:1}),s[65]||(s[65]=n(" 去了解如何在一个 32 位操作系统上保证 64 位对齐。",-1))]),s[103]||(s[103]=a("h3",{id:"没有注意到大量的资源被-time-after-函数调用占用",tabindex:"-1"},[n("没有注意到大量的资源被 "),a("code",null,"time.After"),n(" 函数调用占用 "),a("a",{class:"header-anchor",href:"#没有注意到大量的资源被-time-after-函数调用占用","aria-label":"Permalink to “没有注意到大量的资源被 time.After 函数调用占用”"},"​")],-1)),a("p",null,[s[67]||(s[67]=n("在 ",-1)),s[68]||(s[68]=a("code",null,"time",-1)),s[69]||(s[69]=n(" 标准包中的 ",-1)),s[70]||(s[70]=a("code",null,"After",-1)),s[71]||(s[71]=n(" 函数返回 ",-1)),e(p,{href:"https://go101.org/article/channel-use-cases.html#timer"},{default:l(()=>[...s[66]||(s[66]=[n("一个延迟通知的信道",-1)])]),_:1}),s[72]||(s[72]=n("。这个函数在某些情况下用起来很便捷，但是，每次调用它将创建一个 ",-1)),s[73]||(s[73]=a("code",null,"time.Timer",-1)),s[74]||(s[74]=n(" 类型的新值。这个新创建的 ",-1)),s[75]||(s[75]=a("code",null,"Timer",-1)),s[76]||(s[76]=n(" 值在通过传递参数到  ",-1)),s[77]||(s[77]=a("code",null,"After",-1)),s[78]||(s[78]=n(" 函数指定期间保持激活状态，如果在这个期间过多的调用了该函数，可能会有太多的 ",-1)),s[79]||(s[79]=a("code",null,"Timer",-1)),s[80]||(s[80]=n(" 值保持激活，这将占用大量的内存和计算资源。",-1))]),s[104]||(s[104]=t(`<p>例如，如果调用了下列的 <code>longRunning</code> 函数，将在一分钟内产生大量的消息，然后在某些周期内将有大量的 <code>Timer</code> 值保持激活，即便是大量的这些 <code>Timer</code> 值已经没用了也是如此。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>为避免在上述代码中创建过多的 <code>Timer</code> 值，我们将使用一个单一的 <code>Timer</code> 值去完成同样的任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func longRunning(messages &lt;-chan string) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="不正确地使用-time-timer-值" tabindex="-1">不正确地使用 <code>time.Timer</code> 值 <a class="header-anchor" href="#不正确地使用-time-timer-值" aria-label="Permalink to “不正确地使用 time.Timer 值”">​</a></h3><p>在最后，我们将展示一个符合语言使用习惯的 <code>time.Timer</code> 值的使用示例。需要注意的一个细节是，那个 <code>Reset</code> 方法总是在停止或者 <code>time.Timer</code> 值释放时被使用。</p><p>在 <code>select</code> 块的第一个 <code>case</code> 分支的结束部分，<code>time.Timer</code> 值被释放，因此，我们不需要去停止它。但是必须在第二个分支中停止定时器。如果在第二个分支中 <code>if</code> 代码块缺失，它可能至少在 <code>Reset</code> 方法调用时，会（通过 Go 运行时）发送到 <code>timer.C</code> 信道，并且那个 <code>longRunning</code> 函数可能会早于预期返回，对于 <code>Reset</code> 方法来说，它可能仅仅是重置内部定时器为 0，它将不会清理（耗尽）那个发送到 <code>timer.C</code> 信道的值。</p><p>例如，下面的程序很有可能在一秒内而不是十秒时退出。并且更重要的是，这个程序并不是 DRF 的（LCTT 译注：data race free，多线程程序的一种同步程度）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>当 <code>time.Timer</code> 的值不再被其它任何一个东西使用时，它的值可能被停留在一种非停止状态，但是，建议在结束时停止它。</p><p>在多个协程中如果不按建议使用 <code>time.Timer</code> 值并发，可能会有 bug 隐患。</p><p>我们不应该依赖一个 <code>Reset</code> 方法调用的返回值。<code>Reset</code> 方法返回值的存在仅仅是为了兼容性目的。</p><hr>`,13)),a("p",null,[s[82]||(s[82]=n("via: ",-1)),e(p,{href:"https://go101.org/article/concurrent-common-mistakes.html"},{default:l(()=>[...s[81]||(s[81]=[n("https://go101.org/article/concurrent-common-mistakes.html",-1)])]),_:1})]),a("p",null,[s[86]||(s[86]=n("作者：",-1)),e(p,{href:"go101.org"},{default:l(()=>[...s[83]||(s[83]=[n("go101.org",-1)])]),_:1}),s[87]||(s[87]=n(" 译者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[84]||(s[84]=[n("qhwdw",-1)])]),_:1}),s[88]||(s[88]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[85]||(s[85]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[91]||(s[91]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[89]||(s[89]=[n("LCTT",-1)])]),_:1}),s[92]||(s[92]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[90]||(s[90]=[n("Linux中国",-1)])]),_:1}),s[93]||(s[93]=n(" 荣誉推出",-1))])])}const T=i(u,[["render",c]]);export{y as __pageData,T as default};
