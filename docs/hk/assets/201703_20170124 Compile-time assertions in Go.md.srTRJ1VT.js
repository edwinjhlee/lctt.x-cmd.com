import{_ as o,a0 as e,w as r,s as g,I as p,x as n,a1 as l,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"Go 語言編譯期斷言 | LCTT x X-CMD","titleTemplate":false,"description":"Go 語言編譯期斷言 | LCTT (201703) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 語言編譯期斷言 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 語言編譯期斷言 | LCTT (201703) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201703/20170124 Compile-time assertions in Go","title":"Go 語言編譯期斷言","tag":"201703","desc":""},"relativePath":"201703/20170124 Compile-time assertions in Go.md","filePath":"[post].md"}'),d={name:"201703/20170124 Compile-time assertions in Go.md"};function u(m,s,f,b,k,T){const a=e("Link");return r(),g("div",null,[s[65]||(s[65]=p("h1",{id:"go-語言編譯期斷言",tabindex:"-1"},[n("Go 語言編譯期斷言 "),p("a",{class:"header-anchor",href:"#go-語言編譯期斷言","aria-label":"Permalink to “Go 語言編譯期斷言”"},"​")],-1)),s[66]||(s[66]=p("p",null,"這篇文章是關於一個鮮為人知的讓 Go 在編譯期斷言的方法。你可能不會使用它，但是瞭解一下也很有趣。",-1)),s[67]||(s[67]=p("p",null,"作為一個熱身，來看一個在 Go 中熟知的編譯期斷言：接口滿意度檢查。",-1)),p("p",null,[s[2]||(s[2]=n("在這段代碼（",-1)),l(a,{href:"https://play.golang.org/p/MJ6zF1oNsX"},{default:i(()=>[...s[0]||(s[0]=[n("playground",-1)])]),_:1}),s[3]||(s[3]=n("）中，",-1)),s[4]||(s[4]=p("code",null,"var _ =",-1)),s[5]||(s[5]=n(" 行確保類型 ",-1)),s[6]||(s[6]=p("code",null,"W",-1)),s[7]||(s[7]=n(" 是一個 ",-1)),s[8]||(s[8]=p("code",null,"stringWriter",-1)),s[9]||(s[9]=n("，其由 ",-1)),l(a,{href:"https://golang.org/pkg/io/#WriteString"},{default:i(()=>[...s[1]||(s[1]=[p("code",null,"io.WriteString",-1)])]),_:1}),s[10]||(s[10]=n(" 檢查。",-1))]),s[68]||(s[68]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>如果你註釋掉了 <code>W</code> 的 <code>WriteString</code> 方法，代碼將無法編譯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>main.go:14: cannot use W literal (type W) as type stringWriter in assignment:</span></span>
<span class="line"><span>	W does not implement stringWriter (missing WriteString method)</span></span></code></pre></div><p>這是很有用的。對於大多數同時滿足 <code>io.Writer</code> 和 <code>stringWriter</code> 的類型，如果你刪除 <code>WriteString</code> 方法，一切都會像以前一樣繼續工作，但性能較差。</p>`,4)),p("p",null,[s[12]||(s[12]=n("你可以使用編譯期斷言保護你的代碼，而不是試圖使用",-1)),l(a,{href:"https://golang.org/pkg/testing/#AllocsPerRun"},{default:i(()=>[...s[11]||(s[11]=[n("`testing.T.AllocsPerRun'",-1)])]),_:1}),s[13]||(s[13]=n("為性能迴歸編寫一個脆弱的測試。",-1))]),p("p",null,[s[15]||(s[15]=n("這是",-1)),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/src/io/multi.go#L72"},{default:i(()=>[...s[14]||(s[14]=[n("一個實際的 io 包中的技術例子",-1)])]),_:1}),s[16]||(s[16]=n("。",-1))]),s[69]||(s[69]=p("hr",null,null,-1)),s[70]||(s[70]=p("p",null,"好的，讓我們低調一點！",-1)),s[71]||(s[71]=p("p",null,[n("接口滿意檢查是很棒的。但是如果你想檢查一個簡單的布爾表達式，如 "),p("code",null,"1 + 1 == 2"),n(" ？")],-1)),p("p",null,[s[18]||(s[18]=n("考慮這個代碼（[playground] ",-1)),l(a,{href:"https://play.golang.org/p/mjIMWsWu4V"},{default:i(()=>[...s[17]||(s[17]=[n("5",-1)])]),_:1}),s[19]||(s[19]=n("）：",-1))]),s[72]||(s[72]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,1)),p("p",null,[s[21]||(s[21]=p("code",null,"Hash",-1)),s[22]||(s[22]=n(" 可能是某種抽象的哈希結果。",-1)),s[23]||(s[23]=p("code",null,"init",-1)),s[24]||(s[24]=n(" 函數確保它將與 ",-1)),l(a,{href:"https://golang.org/pkg/crypto/md5/"},{default:i(()=>[...s[20]||(s[20]=[n("crypto/md5",-1)])]),_:1}),s[25]||(s[25]=n(" 一起工作。如果你改變 ",-1)),s[26]||(s[26]=p("code",null,"Hash",-1)),s[27]||(s[27]=n(" 為（比如説）",-1)),s[28]||(s[28]=p("code",null,"[8]byte",-1)),s[29]||(s[29]=n("，它會在進程啓動時發生崩潰。但是，這是一個運行時檢查。如果我們想要早點發現怎麼辦？",-1))]),s[73]||(s[73]=t(`<p>如下。（沒有 playground 鏈接，因為這在 playground 上不起作用。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>現在如果你改變 <code>Hash</code> 為 <code>[8]byte</code>，它將在編譯過程中失敗。（實際上，它在鏈接過程中失敗。足夠接近我們的目標了。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build .</span></span>
<span class="line"><span># demo</span></span>
<span class="line"><span>main.hashIsTooSmall: call to external function</span></span>
<span class="line"><span>main.init.1: relocation target main.hashIsTooSmall not defined</span></span>
<span class="line"><span>main.init.1: undefined: &quot;main.hashIsTooSmall&quot;</span></span></code></pre></div><p>這裏發生了什麼？</p>`,5)),p("p",null,[s[31]||(s[31]=p("code",null,"hashIsTooSmall",-1)),s[32]||(s[32]=n(" 是",-1)),l(a,{href:"https://golang.org/ref/spec#Function_declarations"},{default:i(()=>[...s[30]||(s[30]=[n("一個沒有函數體的聲明",-1)])]),_:1}),s[33]||(s[33]=n("。編譯器假定別人將提供一個實現，也許是一個彙編程序。",-1))]),s[74]||(s[74]=p("p",null,[n("當編譯器可以證明 "),p("code",null,"len（Hash {}）< md5.Size"),n(" 時，它消除了 if 語句中的代碼。結果，沒有人使用函數 "),p("code",null,"hashIsTooSmall"),n("，所以鏈接器會消除它。沒有其他損害。一旦斷言失敗，if 語句中的代碼將被保留。不會消除 "),p("code",null,"hashIsTooSmall"),n("。鏈接器然後注意到沒有人提供了函數的實現然後鏈接失敗，並出現錯誤，這是我們的目標。")],-1)),p("p",null,[s[35]||(s[35]=n("最後一個奇怪的點：為什麼是 ",-1)),s[36]||(s[36]=p("code",null,'import "C"',-1)),s[37]||(s[37]=n("？ go 工具知道在正常的 Go 代碼中，所有函數都必須有主體，並指示編譯器強制執行。通過切換到 cgo，我們刪除該檢查。（如果你在上面的代碼中運行 ",-1)),s[38]||(s[38]=p("code",null,"go build -x",-1)),s[39]||(s[39]=n("，而沒有添加 ",-1)),s[40]||(s[40]=p("code",null,'import "C"',-1)),s[41]||(s[41]=n(" 這行，你會看到編譯器是用 ",-1)),s[42]||(s[42]=p("code",null,"-complete",-1)),s[43]||(s[43]=n(" 標誌調用的。）另一種方法是添加 ",-1)),s[44]||(s[44]=p("code",null,'import "C"',-1)),s[45]||(s[45]=n(" 來",-1)),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/src/os/signal/sig.s"},{default:i(()=>[...s[34]||(s[34]=[n("向包中添加一個名為 ",-1),p("code",null,"foo.s",-1),n(" 的空文件",-1)])]),_:1}),s[46]||(s[46]=n("。",-1))]),p("p",null,[s[49]||(s[49]=n("我僅見過一次這種技術的使用，是在",-1)),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/test/fixedbugs/issue9608.dir/issue9608.go"},{default:i(()=>[...s[47]||(s[47]=[n("編譯器測試套件",-1)])]),_:1}),s[50]||(s[50]=n("中。還有其他",-1)),l(a,{href:"https://github.com/golang/go/blob/go1.8rc2/src/runtime/hashmap.go#L261"},{default:i(()=>[...s[48]||(s[48]=[n("可以發揮想像力的使用",-1)])]),_:1}),s[51]||(s[51]=n("，但我還沒見到過。",-1))]),s[75]||(s[75]=p("p",null,"可能就是這樣吧。 😃",-1)),s[76]||(s[76]=p("hr",null,null,-1)),p("p",null,[s[53]||(s[53]=n("via: ",-1)),l(a,{href:"http://commaok.xyz/post/compile-time-assertions"},{default:i(()=>[...s[52]||(s[52]=[n("http://commaok.xyz/post/compile-time-assertions",-1)])]),_:1})]),p("p",null,[s[57]||(s[57]=n("作者：",-1)),l(a,{href:"https://twitter.com/commaok"},{default:i(()=>[...s[54]||(s[54]=[n("Josh Bleecher Snyder",-1)])]),_:1}),s[58]||(s[58]=n(" 譯者：",-1)),l(a,{href:"https://github.com/geekpi"},{default:i(()=>[...s[55]||(s[55]=[n("geekpi",-1)])]),_:1}),s[59]||(s[59]=n(" 校對：",-1)),l(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[56]||(s[56]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[62]||(s[62]=n("本文由 ",-1)),l(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[60]||(s[60]=[n("LCTT",-1)])]),_:1}),s[63]||(s[63]=n(" 原創編譯，",-1)),l(a,{href:"https://linux.cn/"},{default:i(()=>[...s[61]||(s[61]=[n("Linux中國",-1)])]),_:1}),s[64]||(s[64]=n(" 榮譽推出",-1))])])}const W=o(d,[["render",u]]);export{S as __pageData,W as default};
