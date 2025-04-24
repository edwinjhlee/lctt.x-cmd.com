import{_ as o,W as e,s as r,u,I as p,ah as i,w as s,Z as l,A as t}from"./chunks/framework.Dx7wo2et.js";import"./chunks/theme.CjgFg8Ql.js";const k=JSON.parse('{"title":"Go 语言编译期断言 | LCTT x X-CMD","titleTemplate":false,"description":"Go 语言编译期断言 | LCTT (201703) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"Go 语言编译期断言 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 语言编译期断言 | LCTT (201703) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201703/20170124 Compile-time assertions in Go","title":"Go 语言编译期断言","tag":"201703"},"relativePath":"201703/20170124 Compile-time assertions in Go.md","filePath":"[post].md"}'),d={name:"201703/20170124 Compile-time assertions in Go.md"};function g(m,n,f,b,T,C){const a=e("Link");return u(),r("div",null,[n[65]||(n[65]=p("h1",{id:"go-语言编译期断言",tabindex:"-1"},[s("Go 语言编译期断言 "),p("a",{class:"header-anchor",href:"#go-语言编译期断言","aria-label":"Permalink to Go 语言编译期断言"},"​")],-1)),n[66]||(n[66]=p("p",null,"这篇文章是关于一个鲜为人知的让 Go 在编译期断言的方法。你可能不会使用它，但是了解一下也很有趣。",-1)),n[67]||(n[67]=p("p",null,"作为一个热身，来看一个在 Go 中熟知的编译期断言：接口满意度检查。",-1)),p("p",null,[n[2]||(n[2]=s("在这段代码（")),l(a,{href:"https://play.golang.org/p/MJ6zF1oNsX"},{default:t(()=>n[0]||(n[0]=[s("playground")])),_:1}),n[3]||(n[3]=s("）中，")),n[4]||(n[4]=p("code",null,"var _ =",-1)),n[5]||(n[5]=s(" 行确保类型 ")),n[6]||(n[6]=p("code",null,"W",-1)),n[7]||(n[7]=s(" 是一个 ")),n[8]||(n[8]=p("code",null,"stringWriter",-1)),n[9]||(n[9]=s("，其由 ")),l(a,{href:"https://golang.org/pkg/io/#WriteString"},{default:t(()=>n[1]||(n[1]=[p("code",null,"io.WriteString",-1)])),_:1}),n[10]||(n[10]=s(" 检查。"))]),n[68]||(n[68]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;io&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type W struct{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (w W) Write(b []byte) (int, error)       { return len(b), nil }</span></span>
<span class="line"><span>func (w W) WriteString(s string) (int, error) { return len(s), nil }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type stringWriter interface {</span></span>
<span class="line"><span>	WriteString(string) (int, error)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var _ stringWriter = W{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	var w W</span></span>
<span class="line"><span>	io.WriteString(w, &quot;very long string&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你注释掉了 <code>W</code> 的 <code>WriteString</code> 方法，代码将无法编译：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>main.go:14: cannot use W literal (type W) as type stringWriter in assignment:</span></span>
<span class="line"><span>	W does not implement stringWriter (missing WriteString method)</span></span></code></pre></div><p>这是很有用的。对于大多数同时满足 <code>io.Writer</code> 和 <code>stringWriter</code> 的类型，如果你删除 <code>WriteString</code> 方法，一切都会像以前一样继续工作，但性能较差。</p>`,4)),p("p",null,[n[12]||(n[12]=s("你可以使用编译期断言保护你的代码，而不是试图使用")),l(a,{href:"https://golang.org/pkg/testing/#AllocsPerRun"},{default:t(()=>n[11]||(n[11]=[s("`testing.T.AllocsPerRun'")])),_:1}),n[13]||(n[13]=s("为性能回归编写一个脆弱的测试。"))]),p("p",null,[n[15]||(n[15]=s("这是")),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/src/io/multi.go#L72"},{default:t(()=>n[14]||(n[14]=[s("一个实际的 io 包中的技术例子")])),_:1}),n[16]||(n[16]=s("。"))]),n[69]||(n[69]=p("hr",null,null,-1)),n[70]||(n[70]=p("p",null,"好的，让我们低调一点！",-1)),n[71]||(n[71]=p("p",null,[s("接口满意检查是很棒的。但是如果你想检查一个简单的布尔表达式，如 "),p("code",null,"1 + 1 == 2"),s(" ？")],-1)),p("p",null,[n[18]||(n[18]=s("考虑这个代码（[playground] ")),l(a,{href:"https://play.golang.org/p/mjIMWsWu4V"},{default:t(()=>n[17]||(n[17]=[s("5")])),_:1}),n[19]||(n[19]=s("）："))]),n[72]||(n[72]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;crypto/md5&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Hash [16]byte</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	if len(Hash{}) &lt; md5.Size {</span></span>
<span class="line"><span>		panic(&quot;Hash is too small&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	// ...</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)),p("p",null,[n[21]||(n[21]=p("code",null,"Hash",-1)),n[22]||(n[22]=s(" 可能是某种抽象的哈希结果。")),n[23]||(n[23]=p("code",null,"init",-1)),n[24]||(n[24]=s(" 函数确保它将与 ")),l(a,{href:"https://golang.org/pkg/crypto/md5/"},{default:t(()=>n[20]||(n[20]=[s("crypto/md5")])),_:1}),n[25]||(n[25]=s(" 一起工作。如果你改变 ")),n[26]||(n[26]=p("code",null,"Hash",-1)),n[27]||(n[27]=s(" 为（比如说）")),n[28]||(n[28]=p("code",null,"[8]byte",-1)),n[29]||(n[29]=s("，它会在进程启动时发生崩溃。但是，这是一个运行时检查。如果我们想要早点发现怎么办？"))]),n[73]||(n[73]=i(`<p>如下。（没有 playground 链接，因为这在 playground 上不起作用。）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;C&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;crypto/md5&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Hash [16]byte</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func hashIsTooSmall()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>	if len(Hash{}) &lt; md5.Size {</span></span>
<span class="line"><span>		hashIsTooSmall()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	// ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在如果你改变 <code>Hash</code> 为 <code>[8]byte</code>，它将在编译过程中失败。（实际上，它在链接过程中失败。足够接近我们的目标了。）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ go build .</span></span>
<span class="line"><span># demo</span></span>
<span class="line"><span>main.hashIsTooSmall: call to external function</span></span>
<span class="line"><span>main.init.1: relocation target main.hashIsTooSmall not defined</span></span>
<span class="line"><span>main.init.1: undefined: &quot;main.hashIsTooSmall&quot;</span></span></code></pre></div><p>这里发生了什么？</p>`,5)),p("p",null,[n[31]||(n[31]=p("code",null,"hashIsTooSmall",-1)),n[32]||(n[32]=s(" 是")),l(a,{href:"https://golang.org/ref/spec#Function_declarations"},{default:t(()=>n[30]||(n[30]=[s("一个没有函数体的声明")])),_:1}),n[33]||(n[33]=s("。编译器假定别人将提供一个实现，也许是一个汇编程序。"))]),n[74]||(n[74]=p("p",null,[s("当编译器可以证明 "),p("code",null,"len（Hash {}）< md5.Size"),s(" 时，它消除了 if 语句中的代码。结果，没有人使用函数 "),p("code",null,"hashIsTooSmall"),s("，所以链接器会消除它。没有其他损害。一旦断言失败，if 语句中的代码将被保留。不会消除 "),p("code",null,"hashIsTooSmall"),s("。链接器然后注意到没有人提供了函数的实现然后链接失败，并出现错误，这是我们的目标。")],-1)),p("p",null,[n[35]||(n[35]=s("最后一个奇怪的点：为什么是 ")),n[36]||(n[36]=p("code",null,'import "C"',-1)),n[37]||(n[37]=s("？ go 工具知道在正常的 Go 代码中，所有函数都必须有主体，并指示编译器强制执行。通过切换到 cgo，我们删除该检查。（如果你在上面的代码中运行 ")),n[38]||(n[38]=p("code",null,"go build -x",-1)),n[39]||(n[39]=s("，而没有添加 ")),n[40]||(n[40]=p("code",null,'import "C"',-1)),n[41]||(n[41]=s(" 这行，你会看到编译器是用 ")),n[42]||(n[42]=p("code",null,"-complete",-1)),n[43]||(n[43]=s(" 标志调用的。）另一种方法是添加 ")),n[44]||(n[44]=p("code",null,'import "C"',-1)),n[45]||(n[45]=s(" 来")),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/src/os/signal/sig.s"},{default:t(()=>n[34]||(n[34]=[s("向包中添加一个名为 "),p("code",null,"foo.s",-1),s(" 的空文件")])),_:1}),n[46]||(n[46]=s("。"))]),p("p",null,[n[49]||(n[49]=s("我仅见过一次这种技术的使用，是在")),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/test/fixedbugs/issue9608.dir/issue9608.go"},{default:t(()=>n[47]||(n[47]=[s("编译器测试套件")])),_:1}),n[50]||(n[50]=s("中。还有其他")),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/src/runtime/hashmap.go#L261"},{default:t(()=>n[48]||(n[48]=[s("可以发挥想象力的使用")])),_:1}),n[51]||(n[51]=s("，但我还没见到过。"))]),n[75]||(n[75]=p("p",null,"可能就是这样吧。 😃",-1)),n[76]||(n[76]=p("hr",null,null,-1)),p("p",null,[n[53]||(n[53]=s("via: ")),l(a,{href:"http://commaok.xyz/post/compile-time-assertions"},{default:t(()=>n[52]||(n[52]=[s("http://commaok.xyz/post/compile-time-assertions")])),_:1})]),p("p",null,[n[57]||(n[57]=s("作者：")),l(a,{href:"https://twitter.com/commaok"},{default:t(()=>n[54]||(n[54]=[s("Josh Bleecher Snyder")])),_:1}),n[58]||(n[58]=s(" 译者：")),l(a,{href:"https://github.com/geekpi"},{default:t(()=>n[55]||(n[55]=[s("geekpi")])),_:1}),n[59]||(n[59]=s(" 校对：")),l(a,{href:"https://github.com/wxy"},{default:t(()=>n[56]||(n[56]=[s("wxy")])),_:1})]),p("p",null,[n[62]||(n[62]=s("本文由 ")),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>n[60]||(n[60]=[s("LCTT")])),_:1}),n[63]||(n[63]=s(" 原创编译，")),l(a,{href:"https://linux.cn/"},{default:t(()=>n[61]||(n[61]=[s("Linux中国")])),_:1}),n[64]||(n[64]=s(" 荣誉推出"))])])}const S=o(d,[["render",g]]);export{k as __pageData,S as default};
