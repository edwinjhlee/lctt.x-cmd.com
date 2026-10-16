import{_ as l,a0 as i,w as o,s as d,ao as r,I as t,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"在 Go 中如何转储一个方法的 GOSSAFUNC 图 | LCTT x X-CMD","titleTemplate":false,"description":"在 Go 中如何转储一个方法的 GOSSAFUNC 图 | LCTT (202006) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Go 中如何转储一个方法的 GOSSAFUNC 图 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Go 中如何转储一个方法的 GOSSAFUNC 图 | LCTT (202006) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202006/20200619 How to dump the GOSSAFUNC graph for a method","title":"在 Go 中如何转储一个方法的 GOSSAFUNC 图","tag":"202006","desc":""},"relativePath":"202006/20200619 How to dump the GOSSAFUNC graph for a method.md","filePath":"[post].md"}'),u={name:"202006/20200619 How to dump the GOSSAFUNC graph for a method.md"};function m(c,s,h,g,f,S){const a=i("Link");return o(),d("div",null,[s[15]||(s[15]=r(`<h1 id="在-go-中如何转储一个方法的-gossafunc-图" tabindex="-1">在 Go 中如何转储一个方法的 GOSSAFUNC 图 <a class="header-anchor" href="#在-go-中如何转储一个方法的-gossafunc-图" aria-label="Permalink to “在 Go 中如何转储一个方法的 GOSSAFUNC 图”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202006/26/083943vymvmc67p7s3oman.jpg" alt=""></p><p>Go 编译器的 SSA 后端包含一种工具，可以生成编译阶段的 HTML 调试输出。这篇文章介绍了如何为函数<em>和</em>方法打印 SSA 输出。</p><p>让我们从一个包含函数、值方法和指针方法的示例程序开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Numbers struct {</span></span>
<span class="line"><span>    vals []int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (n *Numbers) Add(v int) {</span></span>
<span class="line"><span>    n.vals = append(n.vals, v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (n Numbers) Average() float64 {</span></span>
<span class="line"><span>    sum := 0.0</span></span>
<span class="line"><span>    for _, num := range n.vals {</span></span>
<span class="line"><span>        sum += float64(num)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sum / float64(len(n.vals))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    var numbers Numbers</span></span>
<span class="line"><span>    numbers.Add(200)</span></span>
<span class="line"><span>    numbers.Add(43)</span></span>
<span class="line"><span>    numbers.Add(-6)</span></span>
<span class="line"><span>    fmt.Println(numbers.Average())</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过 <code>GOSSAFUNC</code> 环境变量控制 SSA 调试输出。此变量含有要转储的函数的名称。这<em>不是</em>函数的完全限定名。对于上面的 <code>func main</code>，函数名称为 <code>main</code> <em>而不是</em> <code>main.main</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% env GOSSAFUNC=main go build</span></span>
<span class="line"><span>runtime</span></span>
<span class="line"><span>dumped SSA to ../../go/src/runtime/ssa.html</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>dumped SSA to ./ssa.html</span></span></code></pre></div><p>在这个例子中，<code>GOSSAFUNC=main</code> 同时匹配了 <code>main.main</code> 和一个名为 <code>runtime.main</code> 的函数。[^1]这有点不走运，但是实际上可能没什么大不了的，因为如果你要对代码进行性能调整，它就不会出现在 <code>func main</code> 中的巨大的意大利面块中。</p><p>你的代码更有可能在<em>方法</em>中，你可能已经看到这篇文章，并寻找能够转储方法的 SSA 输出。</p><p>要为指针方法 <code>func (n *Numbers) Add</code> 打印 SSA 调试，等效函数名为 <code>(*Numbers).Add</code>：[^2]</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% env &quot;GOSSAFUNC=(*Numbers).Add&quot; go build</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>dumped SSA to ./ssa.html</span></span></code></pre></div><p>要为值方法 <code>func (n Numbers) Average</code> 打印 SSA 调试，等效函数名为 <code>(*Numbers).Average</code>，<em>即使这是一个值方法</em>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% env &quot;GOSSAFUNC=(*Numbers).Average&quot; go build</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>dumped SSA to ./ssa.html</span></span></code></pre></div><p>[^1]: 如果你没有从源码构建 Go，那么 <code>runtime</code> 软件包的路径可能是只读的，并且可能会收到错误消息。请不要使用 <code>sudo</code> 来解决此问题。 [^2]: 请注意 shell 引用</p><hr>`,15)),t("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://dave.cheney.net/2020/06/19/how-to-dump-the-gossafunc-graph-for-a-method"},{default:p(()=>[...s[0]||(s[0]=[n("https://dave.cheney.net/2020/06/19/how-to-dump-the-gossafunc-graph-for-a-method",-1)])]),_:1})]),t("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://dave.cheney.net/author/davecheney"},{default:p(()=>[...s[2]||(s[2]=[n("Dave Cheney",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:p(()=>[...s[4]||(s[4]=[n("geekpi",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const C=l(u,[["render",m]]);export{A as __pageData,C as default};
