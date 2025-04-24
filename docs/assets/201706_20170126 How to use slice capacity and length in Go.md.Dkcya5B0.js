import{_ as i,W as o,s as d,u as r,ah as t,I as s,Z as l,A as e,w as a}from"./chunks/framework.B4JzB-Td.js";import"./chunks/theme.Xs8fIzCW.js";const k=JSON.parse('{"title":"在 Go 中如何使用切片的容量和长度 | LCTT x X-CMD","titleTemplate":false,"description":"在 Go 中如何使用切片的容量和长度 | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"在 Go 中如何使用切片的容量和长度 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Go 中如何使用切片的容量和长度 | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170126 How to use slice capacity and length in Go","title":"在 Go 中如何使用切片的容量和长度","tag":"201706"},"relativePath":"201706/20170126 How to use slice capacity and length in Go.md","filePath":"[post].md"}'),c={name:"201706/20170126 How to use slice capacity and length in Go.md"};function u(g,n,m,f,h,v){const p=o("Link");return r(),d("div",null,[n[31]||(n[31]=t(`<h1 id="在-go-中如何使用切片的容量和长度" tabindex="-1">在 Go 中如何使用切片的容量和长度 <a class="header-anchor" href="#在-go-中如何使用切片的容量和长度" aria-label="Permalink to 在 Go 中如何使用切片的容量和长度">​</a></h1><p>快速测试 - 下面的代码输出什么？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div>`,3)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/7PgUqBdZ6Z"},{default:e(()=>n[0]||(n[0]=[a("在 Go Playground 运行一下")])),_:1})])]),n[32]||(n[32]=t(`<p>如果你猜测的是 <code>[0 0 0 0 0 0 1 2 3 4]</code>，那你是对的。</p><p><em>等等，什么？</em> 为什么不是 <code>[0 1 2 3 4]</code>?</p><p>如果你在测试中做错了，你也不用担心。这是在过渡到 Go 语言的过程中相当常见的错误，在这篇文章中，我们将说明为什么输出不是你预期的，以及如何利用 Go 的细微差别来使你的代码更有效率。</p><h3 id="切片-vs-数组" tabindex="-1">切片 vs 数组 <a class="header-anchor" href="#切片-vs-数组" aria-label="Permalink to 切片 vs 数组">​</a></h3><p>在 Go 中同时有数组（array）和切片（slice）。这可能令人困惑，但一旦你习惯了，你会喜欢上它。请相信我。</p><p>切片和数组之间存在许多差异，但我们要在本文中重点介绍的内容是数组的大小是其类型的一部分，而切片可以具有动态大小，因为它们是围绕数组的封装。</p><p>这在实践中意味着什么？那么假设我们有数组 <code>val a [10]int</code>。该数组具有固定大小，且无法更改。如果我们调用 <code>len(a)</code>，它总是返回 <code>10</code>，因为这个大小是类型的一部分。因此，如果你突然需要在数组中超过 10 个项，则必须创建一个完全不同类型的新对象，例如 <code>val b [11]int</code>，然后将所有值从 <code>a</code> 复制到 <code>b</code>。</p><p>在特定情况下，含有集合大小的数组是有价值的，但一般而言，这不是开发人员想要的。相反，他们希望在 Go 中使用类似于数组的东西，但是随着时间的推移，它们能够随时增长。一个粗略的方式是创建一个比它需要大得多的数组，然后将数组的一个子集视为数组。下面的代码是个例子。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var vals [20]int  </span></span>
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
<span class="line"><span>fmt.Println(&quot;The subset of our array has a length of:&quot;, subsetLen)</span></span></code></pre></div>`,9)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/Np6-NEohm2"},{default:e(()=>n[1]||(n[1]=[a("在 Go Playground 中运行")])),_:1})])]),n[33]||(n[33]=t(`<p>在代码中，我们有一个长度为 <code>20</code> 的数组，但是由于我们只使用一个子集，代码中我们可以假定数组的长度是 <code>5</code>，然后在我们向数组中添加一个新的项之后是 <code>6</code>。</p><p>这是（非常粗略地说）切片是如何工作的。它们包含一个具有设置大小的数组，就像我们前面的例子中的数组一样，它的大小为 <code>20</code>。</p><p>它们还跟踪程序中使用的数组的子集 - 这就是 <code>append</code> 属性，它类似于上一个例子中的 <code>subsetLen</code> 变量。</p><p>最后，一个切片还有一个 <code>capacity</code>，类似于前面例子中我们的数组的总长度（<code>20</code>）。这是很有用的，因为它会告诉你的子集在无法容纳切片数组之前可以增长的大小。当发生这种情况时，需要分配一个新的数组，但所有这些逻辑都隐藏在 <code>append</code> 函数的后面。</p><p>简而言之，使用 <code>append</code> 函数组合切片给我们一个非常类似于数组的类型，但随着时间的推移，它可以处理更多的元素。</p><p>我们再来看一下前面的例子，但是这次我们将使用切片而不是数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var vals []int  </span></span>
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
<span class="line"><span>fmt.Println(vals[2])</span></span></code></pre></div>`,7)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/M_qaNGVbC-"},{default:e(()=>n[2]||(n[2]=[a("在 Go Playground 中运行")])),_:1})])]),n[34]||(n[34]=t(`<p>我们仍然可以像数组一样访问我们的切片中的元素，但是通过使用切片和 <code>append</code> 函数，我们不再需要考虑背后数组的大小。我们仍然可以通过使用 <code>len</code> 和 <code>cap</code> 函数来计算出这些东西，但是我们不用担心太多。简洁吧？</p><h3 id="回到测试" tabindex="-1">回到测试 <a class="header-anchor" href="#回到测试" aria-label="Permalink to 回到测试">​</a></h3><p>记住这点，让我们回顾前面的测试，看下什么出错了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div><p>当调用 <code>make</code> 时，我们允许最多传入 3 个参数。第一个是我们分配的类型，第二个是类型的“长度”，第三个是类型的“容量”（<em>这个参数是可选的</em>）。</p><p>通过传递参数 <code>make([]int, 5)</code>，我们告诉程序我们要创建一个长度为 5 的切片，在这种情况下，默认的容量与长度相同 - 本例中是 5。</p><p>虽然这可能看起来像我们想要的那样，这里的重要区别是我们告诉我们的切片，我们要将“长度”和“容量”设置为 5，假设你想要在初始的 5 个元素_之后_添加新的元素，我们接着调用 <code>append</code> 函数，那么它会增加容量的大小，并且会在切片的最后添加新的元素。</p><p>如果在代码中添加一条 <code>Println()</code> 语句，你可以看到容量的变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>fmt.Println(&quot;Capacity was:&quot;, cap(vals))  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>  fmt.Println(&quot;Capacity is now:&quot;, cap(vals))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div>`,9)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/d6OUulTYM7"},{default:e(()=>n[3]||(n[3]=[a("在 Go Playground 中运行")])),_:1})])]),n[35]||(n[35]=t(`<p>最后，我们最终得到 <code>[0 0 0 0 0 0 1 2 3 4]</code> 的输出而不是希望的 <code>[0 1 2 3 4]</code>。</p><p>如何修复它呢？好的，这有几种方法，我们将讲解两种，你可以选取任何一种在你的场景中最有用的方法。</p><h4 id="直接使用索引写入而不是-append" tabindex="-1">直接使用索引写入而不是 <code>append</code> <a class="header-anchor" href="#直接使用索引写入而不是-append" aria-label="Permalink to 直接使用索引写入而不是 \`append\`">​</a></h4><p>第一种修复是保留 <code>make</code> 调用不变，并且显式地使用索引来设置每个元素。这样，我们就得到如下的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals[i] = i</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div>`,5)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/JI8Fx3fJCU"},{default:e(()=>n[4]||(n[4]=[a("在 Go Playground 中运行")])),_:1})])]),n[36]||(n[36]=t(`<p>在这种情况下，我们设置的值恰好与我们要使用的索引相同，但是你也可以独立跟踪索引。</p><p>比如，如果你想要获取 map 的键，你可以使用下面的代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,3)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/kIKxkdX35B"},{default:e(()=>n[5]||(n[5]=[a("在 Go Playground 中运行")])),_:1})])]),n[37]||(n[37]=t(`<p>这样做很好，因为我们知道我们返回的切片的长度将与 map 的长度相同，因此我们可以用该长度初始化我们的切片，然后将每个元素分配到适当的索引中。这种方法的缺点是我们必须跟踪 <code>i</code>，以便了解每个索引要设置的值。</p><p>这就让我们引出了第二种方法……</p><h4 id="使用-0-作为你的长度并指定容量" tabindex="-1">使用 <code>0</code> 作为你的长度并指定容量 <a class="header-anchor" href="#使用-0-作为你的长度并指定容量" aria-label="Permalink to 使用 \`0\` 作为你的长度并指定容量">​</a></h4><p>与其跟踪我们要添加的值的索引，我们可以更新我们的 <code>make</code> 调用，并在切片类型之后提供两个参数。第一个，我们的新切片的长度将被设置为 <code>0</code>，因为我们还没有添加任何新的元素到切片中。第二个，我们新切片的容量将被设置为 map 参数的长度，因为我们知道我们的切片最终会添加许多字符串。</p><p>这会如前面的例子那样仍旧会在背后构建相同的数组，但是现在当我们调用 <code>append</code> 时，它会将它们放在切片开始处，因为切片的长度是 0。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,6)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/h5hVAHmqJm"},{default:e(()=>n[6]||(n[6]=[a("在 Go Playground 中运行")])),_:1})])]),n[38]||(n[38]=t(`<h3 id="如果-append-处理它-为什么我们还要担心容量呢" tabindex="-1">如果 <code>append</code> 处理它，为什么我们还要担心容量呢？ <a class="header-anchor" href="#如果-append-处理它-为什么我们还要担心容量呢" aria-label="Permalink to 如果 \`append\` 处理它，为什么我们还要担心容量呢？">​</a></h3><p>接下来你可能会问：“如果 <code>append</code> 函数可以为我增加切片的容量，那我们为什么要告诉程序容量呢？”</p><p>事实是，在大多数情况下，你不必担心这太多。如果它使你的代码变得更复杂，只需用 <code>var vals []int</code> 初始化你的切片，然后让 <code>append</code> 函数处理接下来的事。</p><p>但这种情况是不同的。它并不是声明容量困难的例子，实际上这很容易确定我们的切片的最后容量，因为我们知道它将直接映射到提供的 map 中。因此，当我们初始化它时，我们可以声明切片的容量，并免于让我们的程序执行不必要的内存分配。</p><p>如果要查看额外的内存分配情况，请在 Go Playground 上运行以下代码。每次增加容量，程序都需要做一次内存分配。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,6)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/fDbAxtAjLF"},{default:e(()=>n[7]||(n[7]=[a("在 Go Playground 中运行")])),_:1})])]),n[39]||(n[39]=t(`<p>现在将此与相同的代码进行比较，但具有预定义的容量。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,2)),s("p",null,[s("em",null,[l(p,{href:"https://play.golang.org/p/nwT8X9-7eQ"},{default:e(()=>n[8]||(n[8]=[a("在 Go Playground 中运行")])),_:1})])]),n[40]||(n[40]=t('<p>在第一个代码示例中，我们的容量从 <code>0</code> 开始，然后增加到 <code>1</code>、 <code>2</code>、 <code>4</code>, 最后是 <code>8</code>，这意味着我们不得不分配 5 次数组，最后一个容纳我们切片的数组的容量是 <code>8</code>，这比我们最终需要的要大。</p><p>另一方面，我们的第二个例子开始和结束都是相同的容量（<code>5</code>），它只需要在 <code>keys()</code> 函数的开头分配一次。我们还避免了浪费任何额外的内存，并返回一个能放下这个数组的完美大小的切片。</p><h3 id="不要过分优化" tabindex="-1">不要过分优化 <a class="header-anchor" href="#不要过分优化" aria-label="Permalink to 不要过分优化">​</a></h3><p>如前所述，我通常不鼓励任何人做这样的小优化，但如果最后大小的效果真的很明显，那么我强烈建议你尝试为切片设置适当的容量或长度。</p><p>这不仅有助于提高程序的性能，还可以通过明确说明输入的大小和输出的大小之间的关系来帮助澄清你的代码。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to 总结">​</a></h3>',6)),s("blockquote",null,[n[12]||(n[12]=s("p",null,"你好！我写了很多关于Go、Web 开发和其他我觉得有趣的话题。",-1)),s("p",null,[n[10]||(n[10]=a("如果你想跟上最新的文章，请")),l(p,{href:"https://www.calhoun.io/how-to-use-slice-capacity-and-length-in-go/?utm_source=golangweekly&utm_medium=email#mailing-list-form"},{default:e(()=>n[9]||(n[9]=[a("注册我的邮件列表")])),_:1}),n[11]||(n[11]=a("。我会给你发送我新书的样例、Go 的 Web 开发、以及每当有新文章（通常每周 1-2 次）会给你发送邮件。"))]),n[13]||(n[13]=s("p",null,"哦，我保证不会发垃圾邮件。我像你一样讨厌它 😃",-1))]),n[41]||(n[41]=s("p",null,"本文并不是对切片或数组之间差异的详细讨论，而是简要介绍了容量和长度如何影响切片，以及它们在方案中的用途。",-1)),n[42]||(n[42]=s("p",null,"为了进一步阅读，我强烈推荐 Go 博客中的以下文章：",-1)),s("ul",null,[s("li",null,[l(p,{href:"https://blog.golang.org/go-slices-usage-and-internals"},{default:e(()=>n[14]||(n[14]=[a("Go Slices：使用及内部")])),_:1})]),s("li",null,[l(p,{href:"https://blog.golang.org/slices"},{default:e(()=>n[15]||(n[15]=[a("数组、切片（和字符串）：“append” 的机制")])),_:1})]),s("li",null,[l(p,{href:"https://github.com/golang/go/wiki/SliceTricks"},{default:e(()=>n[16]||(n[16]=[a("切片技巧")])),_:1})])]),n[43]||(n[43]=s("hr",null,null,-1)),n[44]||(n[44]=s("p",null,"作者简介：",-1)),n[45]||(n[45]=s("p",null,"Jon 是一名软件顾问，也是 《Web Development with Go》 一书的作者。在此之前，他创立了 EasyPost，一家 Y Combinator 支持的创业公司，并在 Google 工作。",-1)),s("p",null,[l(p,{href:"https://www.usegolang.com"},{default:e(()=>n[17]||(n[17]=[a("https://www.usegolang.com")])),_:1})]),n[46]||(n[46]=s("hr",null,null,-1)),s("p",null,[n[19]||(n[19]=a("via: ")),l(p,{href:"https://www.calhoun.io/how-to-use-slice-capacity-and-length-in-go"},{default:e(()=>n[18]||(n[18]=[a("https://www.calhoun.io/how-to-use-slice-capacity-and-length-in-go")])),_:1})]),s("p",null,[n[23]||(n[23]=a("作者：")),l(p,{href:"https://www.calhoun.io/hire-me"},{default:e(()=>n[20]||(n[20]=[a("Jon Calhoun")])),_:1}),n[24]||(n[24]=a(" 译者：")),l(p,{href:"https://github.com/geekpi"},{default:e(()=>n[21]||(n[21]=[a("geekpi")])),_:1}),n[25]||(n[25]=a(" 校对：")),l(p,{href:"https://github.com/wxy"},{default:e(()=>n[22]||(n[22]=[a("wxy")])),_:1})]),s("p",null,[n[28]||(n[28]=a("本文由 ")),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>n[26]||(n[26]=[a("LCTT")])),_:1}),n[29]||(n[29]=a(" 原创编译，")),l(p,{href:"https://linux.cn/"},{default:e(()=>n[27]||(n[27]=[a("Linux中国")])),_:1}),n[30]||(n[30]=a(" 荣誉推出"))])])}const y=i(c,[["render",u]]);export{k as __pageData,y as default};
