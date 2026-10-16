import{_ as l,a0 as t,w as o,s as r,I as a,x as n,a1 as e,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Go 数组和切片的介绍 | LCTT x X-CMD","titleTemplate":false,"description":"Go 数组和切片的介绍 | LCTT (202206) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 数组和切片的介绍 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 数组和切片的介绍 | LCTT (202206) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202206/20180712 An introduction to Go arrays and slices","title":"Go 数组和切片的介绍","tag":"202206","desc":""},"relativePath":"202206/20180712 An introduction to Go arrays and slices.md","filePath":"[post].md"}'),c={name:"202206/20180712 An introduction to Go arrays and slices.md"};function g(u,s,h,f,k,b){const p=t("Link");return o(),r("div",null,[s[30]||(s[30]=a("h1",{id:"go-数组和切片的介绍",tabindex:"-1"},[n("Go 数组和切片的介绍 "),a("a",{class:"header-anchor",href:"#go-数组和切片的介绍","aria-label":"Permalink to “Go 数组和切片的介绍”"},"​")],-1)),s[31]||(s[31]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202206/02/105657zahhco3612vv1bbo.jpg",alt:""})],-1)),s[32]||(s[32]=a("blockquote",null,[a("p",null,"了解使用数组和切片在 Go 中存储数据的优缺点，以及为什么其中一个更好。")],-1)),a("p",null,[s[1]||(s[1]=n("在本系列的第四篇文章中，我将解释 ",-1)),e(p,{href:"https://golang.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Go",-1)])]),_:1}),s[2]||(s[2]=n(" 数组和切片，包括如何使用它们，以及为什么你通常要选择其中一个而不是另一个。",-1))]),s[33]||(s[33]=d(`<h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to “数组”">​</a></h3><p>数组是编程语言中最流行的数据结构之一，主要原因有两个：一是简单易懂，二是可以存储许多不同类型的数据。</p><p>你可以声明一个名为 <code>anArray</code> 的 Go 数组，该数组存储四个整数，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>anArray := [4]int{-1, 2, 0, -4}</span></span></code></pre></div><p>数组的大小应该在它的类型之前声明，而类型应该在声明元素之前定义。<code>len()</code> 函数可以帮助你得到任何数组的长度。上面数组的大小是 4。</p><p>如果你熟悉其他编程语言，你可能会尝试使用 <code>for</code> 循环来遍历数组。Go 当然也支持 <code>for</code> 循环，不过，正如你将在下面看到的，Go 的 <code>range</code> 关键字可以让你更优雅地遍历数组或切片。</p><p>最后，你也可以定义一个二维数组，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>twoD := [3][3]int{</span></span>
<span class="line"><span>  {1, 2, 3},</span></span>
<span class="line"><span>  {6, 7, 8},</span></span>
<span class="line"><span>  {10, 11, 12}}</span></span></code></pre></div><p><code>arrays.go</code> 源文件中包含了 Go 数组的示例代码。其中最重要的部分是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for i := 0; i &lt; len(twoD); i++ {</span></span>
<span class="line"><span>  k := twoD[i]</span></span>
<span class="line"><span>  for j := 0; j &lt; len(k); j++ {</span></span>
<span class="line"><span>    fmt.Print(k[j], &quot; &quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fmt.Println()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for _, a := range twoD {</span></span>
<span class="line"><span>  for _, j := range a {</span></span>
<span class="line"><span>    fmt.Print(j, &quot; &quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fmt.Println()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过上述代码，我们知道了如何使用 <code>for</code> 循环和 <code>range</code> 关键字迭代数组的元素。<code>arrays.go</code> 的其余代码则展示了如何将数组作为参数传递给函数。</p><p>以下是 <code>arrays.go</code> 的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run arrays.go</span></span>
<span class="line"><span>Before change(): [-1 2 0 -4]</span></span>
<span class="line"><span>After change(): [-1 2 0 -4]</span></span>
<span class="line"><span>1 2 3</span></span>
<span class="line"><span>6 7 8</span></span>
<span class="line"><span>10 11 12</span></span>
<span class="line"><span>1 2 3</span></span>
<span class="line"><span>6 7 8</span></span>
<span class="line"><span>10 11 12</span></span></code></pre></div><p>这个输出告诉我们：对函数内的数组所做的更改，会在函数退出后丢失。</p><h3 id="数组的缺点" tabindex="-1">数组的缺点 <a class="header-anchor" href="#数组的缺点" aria-label="Permalink to “数组的缺点”">​</a></h3><p>Go 数组有很多缺点，你应该重新考虑是否要在 Go 项目中使用它们。</p><p>首先，数组定义之后，大小就无法改变，这意味着 Go 数组不是动态的。简而言之，如果你需要将一个元素添加到一个没有剩余空间的数组中，你将需要创建一个更大的数组，并将旧数组的所有元素复制到新数组中。</p><p>其次，当你将数组作为参数传递给函数时，实际上是传递了数组的副本，这意味着你对函数内部的数组所做的任何更改，都将在函数退出后丢失。</p><p>最后，将大数组传递给函数可能会很慢，主要是因为 Go 必须创建数组的副本。</p><p>以上这些问题的解决方案，就是使用 Go 切片。</p><h3 id="切片" tabindex="-1">切片 <a class="header-anchor" href="#切片" aria-label="Permalink to “切片”">​</a></h3><p>Go 切片与 Go 数组类似，但是它没有后者的缺点。</p><p>首先，你可以使用 <code>append()</code> 函数将元素添加到现有切片中。此外，Go 切片在内部使用数组实现，这意味着 Go 中每个切片都有一个底层数组。</p><p>切片具有 <code>capacity</code> 属性和 <code>length</code> 属性，它们并不总是相同的。切片的长度与元素个数相同的数组的长度相同，可以使用 <code>len()</code> 函数得到。切片的容量是当前为切片分配的空间，可以使用 <code>cap()</code> 函数得到。</p><p>由于切片的大小是动态的，如果切片空间不足（也就是说，当你尝试再向切片中添加一个元素时，底层数组的长度恰好与容量相等），Go 会自动将它的当前容量加倍，使其空间能够容纳更多元素，然后将请求的元素添加到底层数组中。</p><p>此外，切片是通过引用传递给函数的，这意味着实际传递给函数的是切片变量的内存地址，这样一来，你对函数内部的切片所做的任何修改，都不会在函数退出后丢失。因此，将大切片传递给函数，要比将具有相同数量元素的数组传递给同一函数快得多。这是因为 Go 不必拷贝切片 —— 它只需传递切片变量的内存地址。</p><p><code>slice.go</code> 源文件中有 Go 切片的代码示例，其中包含以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func negative(x []int) {</span></span>
<span class="line"><span>  for i, k := range x {</span></span>
<span class="line"><span>    x[i] = -k</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func printSlice(x []int) {</span></span>
<span class="line"><span>  for _, number := range x {</span></span>
<span class="line"><span>    fmt.Printf(&quot;%d &quot;, number)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fmt.Println()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>  s := []int{0, 14, 5, 0, 7, 19}</span></span>
<span class="line"><span>  printSlice(s)</span></span>
<span class="line"><span>  negative(s)</span></span>
<span class="line"><span>  printSlice(s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fmt.Printf(&quot;Before. Cap: %d, length: %d\\n&quot;, cap(s), len(s))</span></span>
<span class="line"><span>  s = append(s, -100)</span></span>
<span class="line"><span>  fmt.Printf(&quot;After. Cap: %d, length: %d\\n&quot;, cap(s), len(s))</span></span>
<span class="line"><span>  printSlice(s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  anotherSlice := make([]int, 4)</span></span>
<span class="line"><span>  fmt.Printf(&quot;A new slice with 4 elements: &quot;)</span></span>
<span class="line"><span>  printSlice(anotherSlice)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>切片和数组在定义方式上的最大区别就在于：你不需要指定切片的大小。实际上，切片的大小取决于你要放入其中的元素数量。此外，<code>append()</code> 函数允许你将元素添加到现有切片 —— 请注意，即使切片的容量允许你将元素添加到该切片，它的长度也不会被修改，除非你调用 <code>append()</code>。上述代码中的 <code>printSlice()</code> 函数是一个辅助函数，用于打印切片中的所有元素，而 <code>negative()</code> 函数将切片中的每个元素都变为各自的相反数。</p><p>运行 <code>slice.go</code> 将得到以下输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run slice.go</span></span>
<span class="line"><span>0 14 5 0 7 19</span></span>
<span class="line"><span>0 -14 -5 0 -7 -19</span></span>
<span class="line"><span>Before. Cap: 6, length: 6</span></span>
<span class="line"><span>After. Cap: 12, length: 7</span></span>
<span class="line"><span>0 -14 -5 0 -7 -19 -100</span></span>
<span class="line"><span>A new slice with 4 elements: 0 0 0 0</span></span></code></pre></div><p>请注意，当你创建一个新切片，并为给定数量的元素分配内存空间时，Go 会自动地将所有元素都初始化为其类型的零值，在本例中为 0（<code>int</code> 类型的零值）。</p><h3 id="使用切片来引用数组" tabindex="-1">使用切片来引用数组 <a class="header-anchor" href="#使用切片来引用数组" aria-label="Permalink to “使用切片来引用数组”">​</a></h3><p>Go 允许你使用 <code>[:]</code> 语法，使用切片来引用现有的数组。在这种情况下，你对切片所做的任何更改都将传播到数组中 —— 详见 <code>refArray.go</code>。请记住，使用 <code>[:]</code> 不会创建数组的副本，它只是对数组的引用。</p><p><code>refArray.go</code> 中最有趣的部分是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>  anArray := [5]int{-1, 2, -3, 4, -5}</span></span>
<span class="line"><span>  refAnArray := anArray[:]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fmt.Println(&quot;Array:&quot;, anArray)</span></span>
<span class="line"><span>  printSlice(refAnArray)</span></span>
<span class="line"><span>  negative(refAnArray)</span></span>
<span class="line"><span>  fmt.Println(&quot;Array:&quot;, anArray)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行 <code>refArray.go</code>，输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run refArray.go</span></span>
<span class="line"><span>Array: [-1 2 -3 4 -5]</span></span>
<span class="line"><span>-1 2 -3 4 -5</span></span>
<span class="line"><span>Array: [1 -2 3 -4 5]</span></span></code></pre></div><p>我们可以发现：对 <code>anArray</code> 数组的切片引用进行了操作后，它本身也被改变了。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>尽管 Go 提供了数组和切片两种类型，你很可能还是会使用切片，因为它们比 Go 数组更加通用、强大。只有少数情况需要使用数组而不是切片，特别是当你完全确定元素的数量固定不变时。</p>`,41)),a("p",null,[s[4]||(s[4]=n("你可以在 ",-1)),e(p,{href:"https://github.com/mactsouk/opensource.com"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[5]||(s[5]=n(" 上找到 ",-1)),s[6]||(s[6]=a("code",null,"arrays.go",-1)),s[7]||(s[7]=n("、",-1)),s[8]||(s[8]=a("code",null,"slice.go",-1)),s[9]||(s[9]=n(" 和 ",-1)),s[10]||(s[10]=a("code",null,"refArray.go",-1)),s[11]||(s[11]=n(" 的源代码。",-1))]),a("p",null,[s[13]||(s[13]=n("如果你有任何问题或反馈，请在下方发表评论或在 ",-1)),e(p,{href:"https://twitter.com/mactsouk"},{default:i(()=>[...s[12]||(s[12]=[n("Twitter",-1)])]),_:1}),s[14]||(s[14]=n(" 上与我联系。",-1))]),s[34]||(s[34]=a("hr",null,null,-1)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/7/introduction-go-arrays-and-slices"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/18/7/introduction-go-arrays-and-slices",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/mtsouk"},{default:i(()=>[...s[17]||(s[17]=[n("Mihalis Tsoukalos",-1)])]),_:1}),s[22]||(s[22]=n(" 选题：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[18]||(s[18]=[n("lkxed",-1)])]),_:1}),s[23]||(s[23]=n(" 译者：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[19]||(s[19]=[n("lkxed",-1)])]),_:1}),s[24]||(s[24]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const C=l(c,[["render",g]]);export{x as __pageData,C as default};
