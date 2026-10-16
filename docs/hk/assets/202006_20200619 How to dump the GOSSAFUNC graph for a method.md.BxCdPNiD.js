import{_ as l,a0 as i,w as o,s as d,ao as r,I as t,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖 | LCTT x X-CMD","titleTemplate":false,"description":"在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖 | LCTT (202006) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖 | LCTT (202006) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202006/20200619 How to dump the GOSSAFUNC graph for a method","title":"在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖","tag":"202006","desc":""},"relativePath":"202006/20200619 How to dump the GOSSAFUNC graph for a method.md","filePath":"[post].md"}'),u={name:"202006/20200619 How to dump the GOSSAFUNC graph for a method.md"};function m(c,s,h,g,f,S){const a=i("Link");return o(),d("div",null,[s[15]||(s[15]=r(`<h1 id="在-go-中如何轉儲一個方法的-gossafunc-圖" tabindex="-1">在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖 <a class="header-anchor" href="#在-go-中如何轉儲一個方法的-gossafunc-圖" aria-label="Permalink to “在 Go 中如何轉儲一個方法的 GOSSAFUNC 圖”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202006/26/083943vymvmc67p7s3oman.jpg" alt=""></p><p>Go 編譯器的 SSA 後端包含一種工具，可以生成編譯階段的 HTML 調試輸出。這篇文章介紹瞭如何為函數<em>和</em>方法打印 SSA 輸出。</p><p>讓我們從一個包含函數、值方法和指針方法的示例程序開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>通過 <code>GOSSAFUNC</code> 環境變量控制 SSA 調試輸出。此變量含有要轉儲的函數的名稱。這<em>不是</em>函數的完全限定名。對於上面的 <code>func main</code>，函數名稱為 <code>main</code> <em>而不是</em> <code>main.main</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% env GOSSAFUNC=main go build</span></span>
<span class="line"><span>runtime</span></span>
<span class="line"><span>dumped SSA to ../../go/src/runtime/ssa.html</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>dumped SSA to ./ssa.html</span></span></code></pre></div><p>在這個例子中，<code>GOSSAFUNC=main</code> 同時匹配了 <code>main.main</code> 和一個名為 <code>runtime.main</code> 的函數。[^1]這有點不走運，但是實際上可能沒什麼大不了的，因為如果你要對代碼進行性能調整，它就不會出現在 <code>func main</code> 中的巨大的意大利麪塊中。</p><p>你的代碼更有可能在<em>方法</em>中，你可能已經看到這篇文章，並尋找能夠轉儲方法的 SSA 輸出。</p><p>要為指針方法 <code>func (n *Numbers) Add</code> 打印 SSA 調試，等效函數名為 <code>(*Numbers).Add</code>：[^2]</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% env &quot;GOSSAFUNC=(*Numbers).Add&quot; go build</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>dumped SSA to ./ssa.html</span></span></code></pre></div><p>要為值方法 <code>func (n Numbers) Average</code> 打印 SSA 調試，等效函數名為 <code>(*Numbers).Average</code>，<em>即使這是一個值方法</em>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% env &quot;GOSSAFUNC=(*Numbers).Average&quot; go build</span></span>
<span class="line"><span>t</span></span>
<span class="line"><span>dumped SSA to ./ssa.html</span></span></code></pre></div><p>[^1]: 如果你沒有從源碼構建 Go，那麼 <code>runtime</code> 軟件包的路徑可能是隻讀的，並且可能會收到錯誤消息。請不要使用 <code>sudo</code> 來解決此問題。 [^2]: 請注意 shell 引用</p><hr>`,15)),t("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://dave.cheney.net/2020/06/19/how-to-dump-the-gossafunc-graph-for-a-method"},{default:p(()=>[...s[0]||(s[0]=[n("https://dave.cheney.net/2020/06/19/how-to-dump-the-gossafunc-graph-for-a-method",-1)])]),_:1})]),t("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://dave.cheney.net/author/davecheney"},{default:p(()=>[...s[2]||(s[2]=[n("Dave Cheney",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:p(()=>[...s[4]||(s[4]=[n("geekpi",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const C=l(u,[["render",m]]);export{A as __pageData,C as default};
