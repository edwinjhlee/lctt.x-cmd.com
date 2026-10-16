import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"从 Node 到 Go：一个粗略的比较 | LCTT x X-CMD","titleTemplate":false,"description":"从 Node 到 Go：一个粗略的比较 | LCTT (201709) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从 Node 到 Go：一个粗略的比较 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从 Node 到 Go：一个粗略的比较 | LCTT (201709) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201709/20170322 From Node to Go A High-Level Comparison","title":"从 Node 到 Go：一个粗略的比较","tag":"201709","desc":""},"relativePath":"201709/20170322 From Node to Go A High-Level Comparison.md","filePath":"[post].md"}'),g={name:"201709/20170322 From Node to Go A High-Level Comparison.md"};function u(h,s,b,c,k,f){const p=o("Link");return r(),d("div",null,[s[58]||(s[58]=a("h1",{id:"从-node-到-go-一个粗略的比较",tabindex:"-1"},[n("从 Node 到 Go：一个粗略的比较 "),a("a",{class:"header-anchor",href:"#从-node-到-go-一个粗略的比较","aria-label":"Permalink to “从 Node 到 Go：一个粗略的比较”"},"​")],-1)),a("p",null,[s[2]||(s[2]=n("在 XO 公司，我们最初使用 Node 和 Ruby 构建相互连接的服务系统。我们享受 Node 带来的明显性能优势，以及可以访问已有的大型软件包仓库。我们也可以轻松地在公司内部发布并复用已有的插件和模块。极大地提高了开发效率，使得我们可以快速编写出可拓展的和可靠的应用。而且，庞大的 Node 社区使我们的工程师向开源软件贡献更加容易（比如 ",-1)),i(p,{href:"https://medium.com/xo-tech/bunnybus-building-a-data-transit-system-b9647f6283e5#.l64fdvfys"},{default:e(()=>[...s[0]||(s[0]=[n("BunnyBus",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),i(p,{href:"https://medium.com/xo-tech/introducing-felicity-7b6d0b734ce#.hmloiiyx8"},{default:e(()=>[...s[1]||(s[1]=[n("Felicity",-1)])]),_:1}),s[4]||(s[4]=n("）。",-1))]),s[59]||(s[59]=l('<p>虽然我在大学时期和刚刚工作的一些时间在使用更严谨的编译语言，比如 C++ 和 C#，而后来我开始使用 JavaScript。我很喜欢它的自由和灵活，但是我最近开始怀念静态和结构化的语言，因为当时有一个同事让我对 Go 语言产生了兴趣。</p><p>我从写 JavaScript 到写 Go，我发现两种语言有很多相似之处。两者学习起来都很快并且易于上手，都具有充满表现力的语法，并且在开发者社区中都有很多工作机会。没有完美的编程语言，所以你应该总是选择一个适合手头项目的语言。在这篇文章中，我将要说明这两种语言深层次上的关键区别，希望能鼓励没有用过 Go 语言的用户<s>可以</s>有机会使用 Go 。</p><h3 id="大体上的差异" tabindex="-1">大体上的差异 <a class="header-anchor" href="#大体上的差异" aria-label="Permalink to “大体上的差异”">​</a></h3><p>在深入细节之前，我们应该先了解一下两种语言之间的重要区别。</p><p>Go，或称 Golang，是 Google 在 2007 年创建的自由开源编程语言。它以快速和简单为设计目标。Go 被直接编译成机器码，这就是它速度的来源。使用编译语言调试是相当容易的，因为你可以在早期捕获大量错误。Go 也是一种强类型的语言，它有助于数据完整，并可以在编译时查找类型错误。</p><p>另一方面，JavaScript 是一种弱类型语言。除了忽略验证数据的类型和真值判断陷阱所带来的额外负担之外，使用弱类型语言也有自己的好处。比起使用<ruby>接口<rt>interfaces</rt></ruby>和<ruby>范型<rt>generics</rt></ruby>，<ruby>柯里化<rt>currying</rt></ruby>和<ruby>可变的形参个数<rt>flexible arity</rt></ruby>让函数变得更加灵活。JavaScript 在运行时进行解释，这可能导致错误处理和调试的问题。Node 是一款基于 Google V8 虚拟机的 JavaScript 运行库，这使它成为一个轻量和快速的 Web 开发平台。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h3><p>作为原来的 JavaScript 开发者，Go 简单和直观的语法很吸引我。由于两种语言的语法可以说都是从 C 语言演变而来的，所以它们的语法有很多相同之处。Go 被普遍认为是一种“容易学习的语言”。那是因为它的对开发者友好的工具、精简的语法和固守惯例（LCTT 译注：惯例优先）。</p><p>Go 包含大量有助于简化开发的内置特性。你可以用标准 Go 构建工具把你的程序用 <code>go build</code> 命令编译成二进制可执行文件。使用内置的测试套件进行测试只需要运行 <code>go test</code> 即可。 诸如原生支持的并发等特性甚至在语言层面上提供。</p>',9)),a("p",null,[i(p,{href:"https://golang.org/doc/faq"},{default:e(()=>[...s[5]||(s[5]=[n("Google 的 Go 开发者",-1)])]),_:1}),s[8]||(s[8]=n("认为，现在的编程太复杂了，太多的“记账一样，重复劳动和文书工作”。这就是为什么 Go 的语法被设计得如此简单和干净，以减少混乱、提高效率和增强可读性。它还鼓励开发人员编写明确的、易于理解的代码。Go 只有 ",-1)),i(p,{href:"https://golang.org/ref/spec#Keywords"},{default:e(()=>[...s[6]||(s[6]=[n("25 个保留关键字",-1)])]),_:1}),s[9]||(s[9]=n("和一种循环（",-1)),s[10]||(s[10]=a("code",null,"for",-1)),s[11]||(s[11]=n(" 循环），而不像 JavaScript 有 ",-1)),i(p,{href:"https://www.w3schools.com/js/js_reserved.asp"},{default:e(()=>[...s[7]||(s[7]=[n(" 大约 84 个关键字",-1)])]),_:1}),s[12]||(s[12]=n("（包括保留关键字字、对象、属性和方法）。",-1))]),s[60]||(s[60]=a("p",null,"为了说明语法的一些差异和相似之处，我们来看几个例子：",-1)),a("ul",null,[a("li",null,[s[14]||(s[14]=n("标点符号： Go 去除了所有多余的符号以提高效率和可读性。尽管 JavaScript 中需要符号的地方也不多（参见： ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Lisp_%28programming_language%29"},{default:e(()=>[...s[13]||(s[13]=[n("Lisp",-1)])]),_:1}),s[15]||(s[15]=n("），而且经常是可选的，但我更加喜欢 Go 的简单。",-1))])]),s[61]||(s[61]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// JavaScript 的逗号和分号</span></span>
<span class="line"><span>for (var i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*JavaScript 中的标点*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 使用最少数量标点</span></span>
<span class="line"><span>for i := 0; i &lt; 10; i++ {</span></span>
<span class="line"><span>    fmt.Println(i)</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go 中的标点*
</code></pre>`,4)),a("ul",null,[a("li",null,[s[17]||(s[17]=n("赋值：由于 Go 是强类型语言，所以你在初始化变量时可以使用 ",-1)),s[18]||(s[18]=a("code",null,":=",-1)),s[19]||(s[19]=n(" 操作符来进行类型推断，以避免",-1)),i(p,{href:"https://golang.org/doc/faq#principles"},{default:e(()=>[...s[16]||(s[16]=[n("重复声明",-1)])]),_:1}),s[20]||(s[20]=n("，而 JavaScript 则在运行时声明类型。",-1))])]),s[62]||(s[62]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// JavaScript 赋值</span></span>
<span class="line"><span>var foo = &quot;bar&quot;;</span></span></code></pre></div><pre><code>*JavaScript 中的赋值*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 的赋值</span></span>
<span class="line"><span>var foo string //不使用类型推导</span></span>
<span class="line"><span>foo = &quot;bar&quot;</span></span>
<span class="line"><span>foo := &quot;bar&quot; //使用类型推导</span></span></code></pre></div><pre><code>*Go 的赋值*
</code></pre><ul><li>导出：在 JavaScript 中，你必须从某个模块中显式地导出。 在 Go 中，任何大写的函数将被默认导出。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Bar = () =&gt; {};</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  Bar</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*JavaScript 中的导出*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 中的导出</span></span>
<span class="line"><span>package foo // 定义包名</span></span>
<span class="line"><span>func Bar (s string) string {</span></span>
<span class="line"><span>    // Bar 将被导出</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go 中的导出*
</code></pre><ul><li>导入：在 JavaScript 中 <code>required</code> 库是导入依赖项和模块所必需的，而 Go 则利用原生的 <code>import</code> 关键字通过包的路径导入模块。另一个区别是，与 Node 的中央 NPM 存储库不同，Go 使用 URL 作为路径来导入非标准库的包，这是为了从包的源码仓库直接克隆依赖。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Javascript 的导入</span></span>
<span class="line"><span>var foo = require(&#39;foo&#39;);</span></span>
<span class="line"><span>foo.bar();</span></span></code></pre></div><pre><code>*JavaScript 的导入*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 的导入</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span><span> // Go 的标准库部分</span></span>
<span class="line"><span>    &quot;github.com/foo/foo&quot;</span><span> // 直接从仓库导入</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>foo.Bar()</span></span></code></pre></div><pre><code>*Go 的导入*
</code></pre><ul><li>返回值：通过 Go 的多值返回特性可以优雅地传递和处理返回值和错误，并且通过传递引用减少了不正确的值传递。在 JavaScript 中需要通过一个对象或者数组来返回多个值。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Javascript - 返回多值</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>    return {a: 1, b: 2};</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { a, b } = foo();</span></span></code></pre></div><pre><code>*JavaScript 的返回*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go - 返回多值</span></span>
<span class="line"><span>func foo() (int, int) {</span></span>
<span class="line"><span>    return 1, 2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a, b := foo()</span></span></code></pre></div><pre><code>*Go 的返回*
</code></pre><ul><li>错误处理：Go 推荐在错误出现的地方捕获它们，而不是像 Node 一样在回调中让错误冒泡。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Node 的错误处理</span></span>
<span class="line"><span>foo(&#39;bar&#39;, function(err, data) {</span></span>
<span class="line"><span>    // 处理错误</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*JavaScript 的错误处理*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Go 的错误处理</span></span>
<span class="line"><span>foo, err := bar()</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    // 用 defer、 panic、 recover 或 log.fatal 等等处理错误.</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go  的错误处理*
</code></pre><ul><li>可变参数函数：Go 和 JavaScript 的函数都支持传入不定数量的参数。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function foo (...args) {</span></span>
<span class="line"><span>    console.log(args.length);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>foo(); // 0</span></span>
<span class="line"><span>foo(1, 2, 3); // 3</span></span></code></pre></div><pre><code>*JavaScript 中的可变参数函数*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func foo (args ...int) {</span></span>
<span class="line"><span>    fmt.Println(len(args))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    foo() // 0</span></span>
<span class="line"><span>    foo(1,2,3) // 3</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go 中的可变参数函数*
</code></pre><h3 id="社区" tabindex="-1">社区 <a class="header-anchor" href="#社区" aria-label="Permalink to “社区”">​</a></h3>`,30)),a("p",null,[s[22]||(s[22]=n("当比较 Go 和 Node 提供的编程范式哪种更方便时，两边都有不同的拥护者。Node 在软件包数量和社区的大小上完全胜过了 Go。Node 包管理器（NPM），是世界上最大的软件仓库，拥有",-1)),i(p,{href:"http://www.modulecounts.com/"},{default:e(()=>[...s[21]||(s[21]=[n("超过 410,000 个软件包，每天以 555 个新软件包的惊人速度增长",-1)])]),_:1}),s[23]||(s[23]=n("。这个数字可能看起来令人吃惊（确实是），但是需要注意的是，这些包许多是重复的，且质量不足以用在生产环境。 相比之下，Go 大约有 13 万个包。",-1))]),s[63]||(s[63]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/800/0*0oUnVVKxuUrvVG3F.",alt:""})],-1)),s[64]||(s[64]=a("p",null,[a("em",null,"Node 和 Go 包的数量")],-1)),a("p",null,[s[25]||(s[25]=n("尽管 Node 和 Go 岁数相仿，但 JavaScript 使用更加广泛，并拥有巨大的开发者和开源社区。因为 Node 是为所有人开发的，并在开始的时候就带有一个强壮的包管理器，而 Go 是特地为 Google 开发的。下面的",-1)),i(p,{href:"http://spectrum.ieee.org/static/interactive-the-top-programming-languages-2016"},{default:e(()=>[...s[24]||(s[24]=[n("Spectrum 排行榜",-1)])]),_:1}),s[26]||(s[26]=n("显示了当前流行的的顶尖 Web 开发语言。",-1))]),s[65]||(s[65]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/800/0*o2SmnUo67xeaFbYZ.",alt:""})],-1)),s[66]||(s[66]=a("p",null,[a("em",null,"Web 开发语言排行榜前 7 名")],-1)),a("p",null,[s[28]||(s[28]=n("JavaScript 的受欢迎程度近年来似乎保持相对稳定，而 ",-1)),i(p,{href:"http://www.tiobe.com/tiobe-index/"},{default:e(()=>[...s[27]||(s[27]=[n("Go 一直在保持上升趋势",-1)])]),_:1}),s[29]||(s[29]=n("。",-1))]),s[67]||(s[67]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/800/0*zX5Yg3whLczpSif_.",alt:""})],-1)),s[68]||(s[68]=a("p",null,[a("em",null,"编程语言趋势")],-1)),s[69]||(s[69]=a("h3",{id:"性能",tabindex:"-1"},[n("性能 "),a("a",{class:"header-anchor",href:"#性能","aria-label":"Permalink to “性能”"},"​")],-1)),a("p",null,[s[31]||(s[31]=n("如果你的主要关注点是速度呢？当今似乎人们比以前更重视性能的优化。用户不喜欢等待信息。 事实上，如果网页的加载时间超过 3 秒，",-1)),i(p,{href:"https://hostingfacts.com/internet-facts-stats-2016/"},{default:e(()=>[...s[30]||(s[30]=[n("40％ 的用户会放弃访问您的网站",-1)])]),_:1}),s[32]||(s[32]=n("。",-1))]),a("p",null,[s[34]||(s[34]=n("因为它的非阻塞异步 I/O，Node 经常被认为是高性能的语言。另外，正如我之前提到的，Node 运行在针对动态语言进行了优化的 Google V8 引擎上。而 Go 的设计也考虑到速度。",-1)),i(p,{href:"https://golang.org/doc/faq"},{default:e(()=>[...s[33]||(s[33]=[n("Google 的开发者们",-1)])]),_:1}),s[35]||(s[35]=n("通过建立了一个“充满表现力而轻量级的类型系统；并发和垃圾回收机制；强制地指定依赖版本等等”，达成了这一目标。",-1))]),a("p",null,[s[37]||(s[37]=n("我运行了一些测试来比较 Node 和 Go 之间的性能。这些测试注重于语言提供的初级能力。如果我准备测试例如 HTTP 请求或者 CPU 密集型运算，我会使用 Go 语言级别的并发工具（goroutines/channels）。但是我更注重于各个语言提供的基本特性（参见 ",-1)),i(p,{href:"https://medium.com/xo-tech/concurrency-in-three-flavors-51ed709876fb#.khvqrttxa"},{default:e(()=>[...s[36]||(s[36]=[n("三种并发方法",-1)])]),_:1}),s[38]||(s[38]=n(" 了解关于 goroutines 和 channels 的更多知识）。",-1))]),s[70]||(s[70]=l(`<p>我在基准测试中也加入了 Python，所以无论如何我们对 Node 和 Go 的结果都很满意。</p><h4 id="循环-算术" tabindex="-1">循环/算术 <a class="header-anchor" href="#循环-算术" aria-label="Permalink to “循环/算术”">​</a></h4><p>迭代十亿项并把它们相加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var r = 0;</span></span>
<span class="line"><span>for (var c = 0; c &lt; 1000000000; c++) {</span></span>
<span class="line"><span>    r += c;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Node</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    var r int</span></span>
<span class="line"><span>    for c := 0; c &lt; 1000000000; c++ {</span></span>
<span class="line"><span>        r += c</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Go</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sum(xrange(1000000000))</span></span></code></pre></div><p><em>Python</em></p><p><img src="https://cdn-images-1.medium.com/max/1600/1*5u0Q9nmpkcsp2ltzmLO6CQ.png" alt=""></p><p><em>结果</em></p><p>这里的输家无疑是 Python，花了超过 7 秒的 CPU 时间。而 Node 和 Go 都相当高效，分别用了 900 ms 和 408 ms。</p><p><em>修正：由于一些评论表明 Python 的性能还可以提高。我更新了结果来反映这些变化。同时，使用 PyPy 大大地提高了性能。当使用 Python 3.6.1 和 PyPy 3.5.7 运行时，性能提升到 1.234 秒，但仍然不及 Go 和 Node 。</em></p><h4 id="i-o" tabindex="-1">I/O <a class="header-anchor" href="#i-o" aria-label="Permalink to “I/O”">​</a></h4><p>遍历一百万个数字并将其写入一个文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
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
<span class="line"><span>        text_file.write(str(i))</span></span></code></pre></div><p><em>Python</em></p><p><img src="https://cdn-images-1.medium.com/max/1600/1*gHZoWV5wIYRmY18ehpjnUQ.png" alt=""></p><p><em>结果</em></p><p>Python 以 7.82 秒再次排名第三。 这次测试中，Node 和 Go 之间的差距很大，Node 花费大约 1.172 秒，Go 花费了 213 毫秒。真正令人印象深刻的是，Go 大部分的处理时间花费在编译上。如果我们将代码编译，以二进制运行，这个 I/O 测试仅花费 78 毫秒——要比 Node 快 15 倍。</p><p><em>修正：修改了 Go 代码以实现缓存 I/O。</em></p><h4 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to “冒泡排序”">​</a></h4><p>将含有十个元素的数组排序一千万次。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function bubbleSort(input) {</span></span>
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
<span class="line"><span>    bubbleSort(toBeSorted)</span></span></code></pre></div><p><em>Python</em></p><p><img src="https://cdn-images-1.medium.com/max/800/1*0_2-i-GwQ0l0n80pECHEUQ.png" alt=""></p><p><em>结果</em></p><p>像刚才一样，Python 的表现是最差的，大约花费 15 秒完成了任务。 Go 完成任务的速度是 Node 的 16 倍。</p><h4 id="判决" tabindex="-1">判决 <a class="header-anchor" href="#判决" aria-label="Permalink to “判决”">​</a></h4><p>Go 无疑是这三个测试中的赢家，而 Node 大部分表现都很出色。Python 也表现不错。要清楚，性能不是选择编程语言需要考虑的全部内容。如果您的应用不需要处理大量数据，那么 Node 和 Go 之间的性能差异可能是微不足道的。 有关性能的一些其他比较，请参阅以下内容：</p>`,38)),a("ul",null,[a("li",null,[i(p,{href:"https://jaxbot.me/articles/node-vs-go-2014"},{default:e(()=>[...s[39]||(s[39]=[n("Node Vs. Go",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://hashnode.com/post/comparison-nodejs-php-c-go-python-and-ruby-cio352ydg000ym253frmfnt70"},{default:e(()=>[...s[40]||(s[40]=[n("Multiple Language Performance Test",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://benchmarksgame.alioth.debian.org/u64q/compare.php?lang=go&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lang2=node"},{default:e(()=>[...s[41]||(s[41]=[n("Benchmarks Game",-1)])]),_:1})])]),s[71]||(s[71]=a("h3",{id:"结论",tabindex:"-1"},[n("结论 "),a("a",{class:"header-anchor",href:"#结论","aria-label":"Permalink to “结论”"},"​")],-1)),s[72]||(s[72]=a("p",null,"这个帖子不是为了证明一种语言比另一种语言更好。由于各种原因，每种编程语言都在软件开发社区中占有一席之地。 我的意图是强调 Go 和 Node 之间的差异，并且促进展示一种新的 Web 开发语言。 在为一个项目选择语言时，有各种因素需要考虑，比如开发人员的熟悉程度、花费和实用性。 我鼓励在决定哪种语言适合您时进行一次彻底的底层分析。",-1)),s[73]||(s[73]=a("p",null,"正如我们所看到的，Go 有如下的优点：接近底层语言的性能，简单的语法和相对简单的学习曲线使它成为构建可拓展和安全的 Web 应用的理想选择。随着 Go 的使用率和社区活动的快速增长，它将会成为现代网络开发中的重要角色。话虽如此，我相信如果 Node 被正确地实现，它正在向正确的方向努力，仍然是一种强大而有用的语言。它具有大量的追随者和活跃的社区，使其成为一个简单的平台，可以让 Web 应用在任何时候启动和运行。",-1)),s[74]||(s[74]=a("h3",{id:"资料",tabindex:"-1"},[n("资料 "),a("a",{class:"header-anchor",href:"#资料","aria-label":"Permalink to “资料”"},"​")],-1)),s[75]||(s[75]=a("p",null,"如果你对学习 Go 语言感兴趣，可以参阅下面的资源：",-1)),a("ul",null,[a("li",null,[i(p,{href:"https://golang.org/doc/#learning"},{default:e(()=>[...s[42]||(s[42]=[n("Golang 网站",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://github.com/golang/go/wiki/Learn"},{default:e(()=>[...s[43]||(s[43]=[n("Golang Wiki",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://www.reddit.com/r/golang/"},{default:e(()=>[...s[44]||(s[44]=[n("Golang Subreddit",-1)])]),_:1})])]),s[76]||(s[76]=a("hr",null,null,-1)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),i(p,{href:"https://medium.com/xo-tech/from-node-to-go-a-high-level-comparison-56c8b717324a#.byltlz535"},{default:e(()=>[...s[45]||(s[45]=[n("https://medium.com/xo-tech/from-node-to-go-a-high-level-comparison-56c8b717324a#.byltlz535",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),i(p,{href:"https://medium.com/@johnstamatakos?source=post_header_lockup"},{default:e(()=>[...s[47]||(s[47]=[n("John Stamatakos",-1)])]),_:1}),s[51]||(s[51]=n(" 译者：",-1)),i(p,{href:"https://github.com/trnhoe"},{default:e(()=>[...s[48]||(s[48]=[n("trnhoe",-1)])]),_:1}),s[52]||(s[52]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[53]||(s[53]=[n("LCTT",-1)])]),_:1}),s[56]||(s[56]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[54]||(s[54]=[n("Linux中国",-1)])]),_:1}),s[57]||(s[57]=n(" 荣誉推出",-1))])])}const G=t(g,[["render",u]]);export{v as __pageData,G as default};
