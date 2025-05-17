import{_ as i,W as o,s as d,u as c,ah as t,I as a,w as s,Z as e,A as l}from"./chunks/framework.DRqsSc0o.js";import"./chunks/theme.DlTh90wK.js";const k=JSON.parse('{"title":"从零开始学习 Go 语言的切片 | LCTT x X-CMD","titleTemplate":false,"description":"从零开始学习 Go 语言的切片 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从零开始学习 Go 语言的切片 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从零开始学习 Go 语言的切片 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180712 Slices from the ground up","title":"从零开始学习 Go 语言的切片","tag":"201808"},"relativePath":"201808/20180712 Slices from the ground up.md","filePath":"[post].md"}'),r={name:"201808/20180712 Slices from the ground up.md"};function u(g,n,m,b,f,v){const p=o("Link");return c(),d("div",null,[n[42]||(n[42]=t(`<h1 id="从零开始学习-go-语言的切片" tabindex="-1">从零开始学习 Go 语言的切片 <a class="header-anchor" href="#从零开始学习-go-语言的切片" aria-label="Permalink to 从零开始学习 Go 语言的切片">​</a></h1><p>这篇文章受到了我与同事讨论使用<ruby>切片<rt>slice</rt></ruby>作为<ruby>栈<rt>stack</rt></ruby>的一次聊天的启发。后来话题聊到了 Go 语言中的切片是如何工作的。我认为这些信息对别人也有用，所以就把它记录了下来。</p><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to 数组">​</a></h3><p>任何关于 Go 语言切片的讨论都要从另一个数据结构也就是<ruby>数组<rt>array</rt></ruby>开始。Go 的数组有两个特性：</p><ol><li><p>数组的长度是固定的；<code>[5]int</code> 是由 5 个 <code>int</code> 构成的数组，和 <code>[3]int</code> 不同。</p></li><li><p>数组是值类型。看下面这个示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        var a [5]int</span></span>
<span class="line"><span>        b := a</span></span>
<span class="line"><span>        b[2] = 7</span></span>
<span class="line"><span>        fmt.Println(a, b) // prints [0 0 0 0 0] [0 0 7 0 0]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>语句 <code>b := a</code> 定义了一个类型是 <code>[5]int</code> 的新变量 <code>b</code>，然后把 <code>a</code> 中的内容 <em>复制</em> 到 <code>b</code> 中。改变 <code>b</code> 对 <code>a</code> 中的内容没有影响，因为 <code>a</code> 和 <code>b</code> 是相互独立的值。[^1]</p></li></ol><h3 id="切片" tabindex="-1">切片 <a class="header-anchor" href="#切片" aria-label="Permalink to 切片">​</a></h3><p>Go 语言的切片和数组的主要有如下两个区别：</p><ol><li>切片没有一个固定的长度。切片的长度不是它类型定义的一部分，而是由切片内部自己维护的。我们可以使用内置的 <code>len</code> 函数知道它的长度。[^2]</li><li>将一个切片赋值给另一个切片时 <em>不会</em> 对切片内容进行复制操作。这是因为切片没有直接持有其内部数据，而是保留了一个指向 <em>底层数组</em> [^3] 的指针。数据都保留在底层数组里。</li></ol><p>基于第二个特性，两个切片可以享有共同的底层数组。看下面的示例：</p><ol><li><p>对切片取切片</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        var a = []int{1,2,3,4,5}</span></span>
<span class="line"><span>        b := a[2:]</span></span>
<span class="line"><span>        b[0] = 0</span></span>
<span class="line"><span>        fmt.Println(a, b) // prints [1 2 0 4 5] [0 4 5]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子里，<code>a</code> 和 <code>b</code> 享有共同的底层数组 —— 尽管 <code>b</code> 在数组里的起始偏移量不同，两者的长度也不同。通过 <code>b</code> 修改底层数组的值也会导致 <code>a</code> 里的值的改变。</p></li><li><p>将切片传进函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在这个例子里，<code>a</code> 作为形参 <code>s</code> 的实参传进了 <code>negate</code> 函数，这个函数遍历 <code>s</code> 内的元素并改变其符号。尽管 <code>nagate</code> 没有返回值，且没有访问到 <code>main</code> 函数里的 <code>a</code>。但是当将之传进 <code>negate</code> 函数内时，<code>a</code> 里面的值却被改变了。</p></li></ol><p>大多数程序员都能直观地了解 Go 语言切片的底层数组是如何工作的，因为它与其它语言中类似数组的工作方式类似。比如下面就是使用 Python 重写的这一小节的第一个示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Python 2.7.10 (default, Feb  7 2017, 00:08:15)</span></span>
<span class="line"><span>[GCC 4.2.1 Compatible Apple LLVM 8.0.0 (clang-800.0.34)] on darwin</span></span>
<span class="line"><span>Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.</span></span>
<span class="line"><span>&gt;&gt;&gt; a = [1,2,3,4,5]</span></span>
<span class="line"><span>&gt;&gt;&gt; b = a</span></span>
<span class="line"><span>&gt;&gt;&gt; b[2] = 0</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>[1, 2, 0, 4, 5]</span></span></code></pre></div><p>以及使用 Ruby 重写的版本:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>irb(main):001:0&gt; a = [1,2,3,4,5]</span></span>
<span class="line"><span>=&gt; [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>irb(main):002:0&gt; b = a</span></span>
<span class="line"><span>=&gt; [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>irb(main):003:0&gt; b[2] = 0</span></span>
<span class="line"><span>=&gt; 0</span></span>
<span class="line"><span>irb(main):004:0&gt; a</span></span>
<span class="line"><span>=&gt; [1, 2, 0, 4, 5]</span></span></code></pre></div><p>在大多数将数组视为对象或者是引用类型的语言也是如此。[^4]</p><h3 id="切片头" tabindex="-1">切片头 <a class="header-anchor" href="#切片头" aria-label="Permalink to 切片头">​</a></h3>`,16)),a("p",null,[n[1]||(n[1]=s("切片同时拥有值和指针特性的神奇之处在于理解切片实际上是一个")),n[2]||(n[2]=a("ruby",null,[s("结构体"),a("rt",null,"struct")],-1)),n[3]||(n[3]=s("类型。通常在")),e(p,{href:"https://golang.org/pkg/reflect/#SliceHeader"},{default:l(()=>n[0]||(n[0]=[a("ruby",null,[s("反射"),a("rt",null,"reflect")],-1),s("包内相应部分之后")])),_:1}),n[4]||(n[4]=s("的这个结构体被称作")),n[5]||(n[5]=a("ruby",null,[s("切片头"),a("rt",null,"slice header")],-1)),n[6]||(n[6]=s("。切片头的定义大致如下："))]),n[43]||(n[43]=t(`<p><img src="https://dave.cheney.net/wp-content/uploads/2018/07/slice.001-300x257.png" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package runtime</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type slice struct {</span></span>
<span class="line"><span>        ptr   unsafe.Pointer</span></span>
<span class="line"><span>        len   int</span></span>
<span class="line"><span>        cap   int</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2)),a("p",null,[n[8]||(n[8]=s("这很重要，因为和 ")),e(p,{href:"https://golang.org/pkg/reflect/#SliceHeader"},{default:l(()=>n[7]||(n[7]=[a("code",null,"map",-1),s(" 以及 "),a("code",null,"chan",-1),s(" 这两个类型不同")])),_:1}),n[9]||(n[9]=s("，切片是值类型，当被赋值或者被作为参数传入函数时候会被复制过去。"))]),n[44]||(n[44]=t(`<p>程序员们都能理解 <code>square</code> 的形参 <code>v</code> 和 <code>main</code> 中声明的 <code>v</code> 的是相互独立的。请看下面的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>因此 <code>square</code> 对自己的形参 <code>v</code> 的操作没有影响到 <code>main</code> 中的 <code>v</code>。下面这个示例中的 <code>s</code> 也是 <code>main</code> 中声明的切片 <code>s</code> 的独立副本， <em>而不是</em> 指向 <code>main</code> 的 <code>s</code> 的指针。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>Go 的切片是作为值传递而不是指针这一点不太寻常。当你在 Go 内定义一个结构体时，90% 的时间里传递的都是这个结构体的指针[^5] 。切片的传递方式真的很不寻常，我能想到的唯一与之相同的例子只有 <code>time.Time</code>。</p><p>切片作为值传递而不是作为指针传递这一特殊行为会让很多想要理解切片的工作原理的 Go 程序员感到困惑。你只需要记住，当你对切片进行赋值、取切片、传参或者作为返回值等操作时，你是在复制切片头结构的三个字段：指向底层数组的指针、长度，以及容量。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to 总结">​</a></h3><p>我们来用引出这一话题的切片作为栈的例子来总结下本文的内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>main</code> 函数的最开始我们把一个 <code>nil</code> 切片传给了函数 <code>f</code> 作为 <code>level</code> 0 。在函数 <code>f</code> 里我们把当前的 <code>level</code> 添加到切片的后面，之后增加 <code>level</code> 的值并进行递归。一旦 <code>level</code> 大于 5，函数返回，打印出当前的 <code>level</code> 以及它们复制到的 <code>s</code> 的内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>level: 5 slice: [0 1 2 3 4 5]</span></span>
<span class="line"><span>level: 4 slice: [0 1 2 3 4]</span></span>
<span class="line"><span>level: 3 slice: [0 1 2 3]</span></span>
<span class="line"><span>level: 2 slice: [0 1 2]</span></span>
<span class="line"><span>level: 1 slice: [0 1]</span></span>
<span class="line"><span>level: 0 slice: [0]</span></span></code></pre></div><p>你可以注意到在每一个 <code>level</code> 内 <code>s</code> 的值没有被别的 <code>f</code> 的调用影响，尽管当计算更高的 <code>level</code> 时作为 <code>append</code> 的副产品，调用栈内的四个 <code>f</code> 函数创建了四个底层数组[^6] ，但是没有影响到当前各自的切片。</p><h3 id="扩展阅读" tabindex="-1">扩展阅读 <a class="header-anchor" href="#扩展阅读" aria-label="Permalink to 扩展阅读">​</a></h3><p>如果你想要了解更多 Go 语言内切片运行的原理，我建议看看 Go 博客里的这些文章：</p>`,14)),a("ul",null,[a("li",null,[e(p,{href:"https://blog.golang.org/go-slices-usage-and-internals"},{default:l(()=>n[10]||(n[10]=[s("Go Slices: usage and internals")])),_:1}),n[11]||(n[11]=s(" (blog.golang.org)"))]),a("li",null,[e(p,{href:"https://blog.golang.org/slices"},{default:l(()=>n[12]||(n[12]=[s("Arrays, slices (and strings): The mechanics of 'append'")])),_:1}),n[13]||(n[13]=s(" (blog.golang.org)"))])]),a("p",null,[n[15]||(n[15]=s("[^1]: 这不是数组才有的特性，在 Go 语言里中 ")),n[16]||(n[16]=a("em",null,"一切",-1)),n[17]||(n[17]=s(" 赋值都是复制过去的。 [^2]: 你也可以在对数组使用 ")),n[18]||(n[18]=a("code",null,"len",-1)),n[19]||(n[19]=s(" 函数，但是其结果本来就人尽皆知。 [^3]: 有时也叫做")),n[20]||(n[20]=a("ruby",null,[s("后台数组"),a("rt",null,"backing array")],-1)),n[21]||(n[21]=s("，以及更不严谨的说法是后台切片。 [^4]: Go 语言里我们倾向于说值类型以及指针类型，因为 C++ 的")),n[22]||(n[22]=a("ruby",null,[s("引用"),a("rt",null,"reference")],-1)),n[23]||(n[23]=s("类型这个词产生误会。但在这里我认为调用数组作为引用类型是没有问题的。 [^5]: 如果你的结构体有")),e(p,{href:"https://golang.org/pkg/reflect/#SliceHeader"},{default:l(()=>n[14]||(n[14]=[s("定义在其上的方法或者用于满足某个接口")])),_:1}),n[24]||(n[24]=s("，那么你传入结构体指针的比率可以飙升到接近 100%。 [^6]: 证明留做习题。"))]),n[45]||(n[45]=a("h3",{id:"相关文章",tabindex:"-1"},[s("相关文章： "),a("a",{class:"header-anchor",href:"#相关文章","aria-label":"Permalink to 相关文章："},"​")],-1)),a("ol",null,[a("li",null,[e(p,{href:"https://dave.cheney.net/2017/04/30/if-a-map-isnt-a-reference-variable-what-is-it"},{default:l(()=>n[25]||(n[25]=[s("If a map isn't a reference variable, what is it?")])),_:1})]),a("li",null,[e(p,{href:"https://dave.cheney.net/2013/01/19/what-is-the-zero-value-and-why-is-it-useful"},{default:l(()=>n[26]||(n[26]=[s("What is the zero value, and why is it useful?")])),_:1})]),a("li",null,[e(p,{href:"https://dave.cheney.net/2014/03/25/the-empty-struct"},{default:l(()=>n[27]||(n[27]=[s("The empty struct")])),_:1})]),a("li",null,[e(p,{href:"https://dave.cheney.net/2016/03/19/should-methods-be-declared-on-t-or-t"},{default:l(()=>n[28]||(n[28]=[s("Should methods be declared on T or *T")])),_:1})])]),n[46]||(n[46]=a("hr",null,null,-1)),a("p",null,[n[30]||(n[30]=s("via: ")),e(p,{href:"https://dave.cheney.net/2018/07/12/slices-from-the-ground-up"},{default:l(()=>n[29]||(n[29]=[s("https://dave.cheney.net/2018/07/12/slices-from-the-ground-up")])),_:1})]),a("p",null,[n[34]||(n[34]=s("作者：")),e(p,{href:"https://dave.cheney.net/"},{default:l(()=>n[31]||(n[31]=[s("Dave Cheney")])),_:1}),n[35]||(n[35]=s(" 译者：")),e(p,{href:"https://github.com/name1e5s"},{default:l(()=>n[32]||(n[32]=[s("name1e5s")])),_:1}),n[36]||(n[36]=s(" 校对：")),e(p,{href:"https://github.com/pityonline"},{default:l(()=>n[33]||(n[33]=[s("pityonline")])),_:1})]),a("p",null,[n[39]||(n[39]=s("本文由 ")),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>n[37]||(n[37]=[s("LCTT")])),_:1}),n[40]||(n[40]=s(" 原创编译，")),e(p,{href:"https://linux.cn/"},{default:l(()=>n[38]||(n[38]=[s("Linux中国")])),_:1}),n[41]||(n[41]=s(" 荣誉推出"))])])}const C=i(r,[["render",u]]);export{k as __pageData,C as default};
