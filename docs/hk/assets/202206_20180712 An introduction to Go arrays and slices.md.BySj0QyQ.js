import{_ as l,a0 as t,w as o,s as r,I as a,x as n,a1 as e,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"Go 數組和切片的介紹 | LCTT x X-CMD","titleTemplate":false,"description":"Go 數組和切片的介紹 | LCTT (202206) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Go 數組和切片的介紹 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Go 數組和切片的介紹 | LCTT (202206) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202206/20180712 An introduction to Go arrays and slices","title":"Go 數組和切片的介紹","tag":"202206","desc":""},"relativePath":"202206/20180712 An introduction to Go arrays and slices.md","filePath":"[post].md"}'),c={name:"202206/20180712 An introduction to Go arrays and slices.md"};function g(u,s,h,f,k,b){const p=t("Link");return o(),r("div",null,[s[30]||(s[30]=a("h1",{id:"go-數組和切片的介紹",tabindex:"-1"},[n("Go 數組和切片的介紹 "),a("a",{class:"header-anchor",href:"#go-數組和切片的介紹","aria-label":"Permalink to “Go 數組和切片的介紹”"},"​")],-1)),s[31]||(s[31]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202206/02/105657zahhco3612vv1bbo.jpg",alt:""})],-1)),s[32]||(s[32]=a("blockquote",null,[a("p",null,"瞭解使用數組和切片在 Go 中存儲數據的優缺點，以及為什麼其中一個更好。")],-1)),a("p",null,[s[1]||(s[1]=n("在本系列的第四篇文章中，我將解釋 ",-1)),e(p,{href:"https://golang.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Go",-1)])]),_:1}),s[2]||(s[2]=n(" 數組和切片，包括如何使用它們，以及為什麼你通常要選擇其中一個而不是另一個。",-1))]),s[33]||(s[33]=d(`<h3 id="數組" tabindex="-1">數組 <a class="header-anchor" href="#數組" aria-label="Permalink to “數組”">​</a></h3><p>數組是編程語言中最流行的數據結構之一，主要原因有兩個：一是簡單易懂，二是可以存儲許多不同類型的數據。</p><p>你可以聲明一個名為 <code>anArray</code> 的 Go 數組，該數組存儲四個整數，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>anArray := [4]int{-1, 2, 0, -4}</span></span></code></pre></div><p>數組的大小應該在它的類型之前聲明，而類型應該在聲明元素之前定義。<code>len()</code> 函數可以幫助你得到任何數組的長度。上面數組的大小是 4。</p><p>如果你熟悉其他編程語言，你可能會嘗試使用 <code>for</code> 循環來遍歷數組。Go 當然也支持 <code>for</code> 循環，不過，正如你將在下面看到的，Go 的 <code>range</code> 關鍵字可以讓你更優雅地遍歷數組或切片。</p><p>最後，你也可以定義一個二維數組，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>twoD := [3][3]int{</span></span>
<span class="line"><span>  {1, 2, 3},</span></span>
<span class="line"><span>  {6, 7, 8},</span></span>
<span class="line"><span>  {10, 11, 12}}</span></span></code></pre></div><p><code>arrays.go</code> 源文件中包含了 Go 數組的示例代碼。其中最重要的部分是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for i := 0; i &lt; len(twoD); i++ {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>通過上述代碼，我們知道了如何使用 <code>for</code> 循環和 <code>range</code> 關鍵字迭代數組的元素。<code>arrays.go</code> 的其餘代碼則展示瞭如何將數組作為參數傳遞給函數。</p><p>以下是 <code>arrays.go</code> 的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run arrays.go</span></span>
<span class="line"><span>Before change(): [-1 2 0 -4]</span></span>
<span class="line"><span>After change(): [-1 2 0 -4]</span></span>
<span class="line"><span>1 2 3</span></span>
<span class="line"><span>6 7 8</span></span>
<span class="line"><span>10 11 12</span></span>
<span class="line"><span>1 2 3</span></span>
<span class="line"><span>6 7 8</span></span>
<span class="line"><span>10 11 12</span></span></code></pre></div><p>這個輸出告訴我們：對函數內的數組所做的更改，會在函數退出後丟失。</p><h3 id="數組的缺點" tabindex="-1">數組的缺點 <a class="header-anchor" href="#數組的缺點" aria-label="Permalink to “數組的缺點”">​</a></h3><p>Go 數組有很多缺點，你應該重新考慮是否要在 Go 項目中使用它們。</p><p>首先，數組定義之後，大小就無法改變，這意味着 Go 數組不是動態的。簡而言之，如果你需要將一個元素添加到一個沒有剩餘空間的數組中，你將需要創建一個更大的數組，並將舊數組的所有元素複製到新數組中。</p><p>其次，當你將數組作為參數傳遞給函數時，實際上是傳遞了數組的副本，這意味着你對函數內部的數組所做的任何更改，都將在函數退出後丟失。</p><p>最後，將大數組傳遞給函數可能會很慢，主要是因為 Go 必須創建數組的副本。</p><p>以上這些問題的解決方案，就是使用 Go 切片。</p><h3 id="切片" tabindex="-1">切片 <a class="header-anchor" href="#切片" aria-label="Permalink to “切片”">​</a></h3><p>Go 切片與 Go 數組類似，但是它沒有後者的缺點。</p><p>首先，你可以使用 <code>append()</code> 函數將元素添加到現有切片中。此外，Go 切片在內部使用數組實現，這意味着 Go 中每個切片都有一個底層數組。</p><p>切片具有 <code>capacity</code> 屬性和 <code>length</code> 屬性，它們並不總是相同的。切片的長度與元素個數相同的數組的長度相同，可以使用 <code>len()</code> 函數得到。切片的容量是當前為切片分配的空間，可以使用 <code>cap()</code> 函數得到。</p><p>由於切片的大小是動態的，如果切片空間不足（也就是説，當你嘗試再向切片中添加一個元素時，底層數組的長度恰好與容量相等），Go 會自動將它的當前容量加倍，使其空間能夠容納更多元素，然後將請求的元素添加到底層數組中。</p><p>此外，切片是通過引用傳遞給函數的，這意味着實際傳遞給函數的是切片變量的內存地址，這樣一來，你對函數內部的切片所做的任何修改，都不會在函數退出後丟失。因此，將大切片傳遞給函數，要比將具有相同數量元素的數組傳遞給同一函數快得多。這是因為 Go 不必拷貝切片 —— 它只需傳遞切片變量的內存地址。</p><p><code>slice.go</code> 源文件中有 Go 切片的代碼示例，其中包含以下代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>切片和數組在定義方式上的最大區別就在於：你不需要指定切片的大小。實際上，切片的大小取決於你要放入其中的元素數量。此外，<code>append()</code> 函數允許你將元素添加到現有切片 —— 請注意，即使切片的容量允許你將元素添加到該切片，它的長度也不會被修改，除非你調用 <code>append()</code>。上述代碼中的 <code>printSlice()</code> 函數是一個輔助函數，用於打印切片中的所有元素，而 <code>negative()</code> 函數將切片中的每個元素都變為各自的相反數。</p><p>運行 <code>slice.go</code> 將得到以下輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run slice.go</span></span>
<span class="line"><span>0 14 5 0 7 19</span></span>
<span class="line"><span>0 -14 -5 0 -7 -19</span></span>
<span class="line"><span>Before. Cap: 6, length: 6</span></span>
<span class="line"><span>After. Cap: 12, length: 7</span></span>
<span class="line"><span>0 -14 -5 0 -7 -19 -100</span></span>
<span class="line"><span>A new slice with 4 elements: 0 0 0 0</span></span></code></pre></div><p>請注意，當你創建一個新切片，併為給定數量的元素分配內存空間時，Go 會自動地將所有元素都初始化為其類型的零值，在本例中為 0（<code>int</code> 類型的零值）。</p><h3 id="使用切片來引用數組" tabindex="-1">使用切片來引用數組 <a class="header-anchor" href="#使用切片來引用數組" aria-label="Permalink to “使用切片來引用數組”">​</a></h3><p>Go 允許你使用 <code>[:]</code> 語法，使用切片來引用現有的數組。在這種情況下，你對切片所做的任何更改都將傳播到數組中 —— 詳見 <code>refArray.go</code>。請記住，使用 <code>[:]</code> 不會創建數組的副本，它只是對數組的引用。</p><p><code>refArray.go</code> 中最有趣的部分是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>  anArray := [5]int{-1, 2, -3, 4, -5}</span></span>
<span class="line"><span>  refAnArray := anArray[:]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fmt.Println(&quot;Array:&quot;, anArray)</span></span>
<span class="line"><span>  printSlice(refAnArray)</span></span>
<span class="line"><span>  negative(refAnArray)</span></span>
<span class="line"><span>  fmt.Println(&quot;Array:&quot;, anArray)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>運行 <code>refArray.go</code>，輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run refArray.go</span></span>
<span class="line"><span>Array: [-1 2 -3 4 -5]</span></span>
<span class="line"><span>-1 2 -3 4 -5</span></span>
<span class="line"><span>Array: [1 -2 3 -4 5]</span></span></code></pre></div><p>我們可以發現：對 <code>anArray</code> 數組的切片引用進行了操作後，它本身也被改變了。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>儘管 Go 提供了數組和切片兩種類型，你很可能還是會使用切片，因為它們比 Go 數組更加通用、強大。只有少數情況需要使用數組而不是切片，特別是當你完全確定元素的數量固定不變時。</p>`,41)),a("p",null,[s[4]||(s[4]=n("你可以在 ",-1)),e(p,{href:"https://github.com/mactsouk/opensource.com"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[5]||(s[5]=n(" 上找到 ",-1)),s[6]||(s[6]=a("code",null,"arrays.go",-1)),s[7]||(s[7]=n("、",-1)),s[8]||(s[8]=a("code",null,"slice.go",-1)),s[9]||(s[9]=n(" 和 ",-1)),s[10]||(s[10]=a("code",null,"refArray.go",-1)),s[11]||(s[11]=n(" 的源代碼。",-1))]),a("p",null,[s[13]||(s[13]=n("如果你有任何問題或反饋，請在下方發表評論或在 ",-1)),e(p,{href:"https://twitter.com/mactsouk"},{default:i(()=>[...s[12]||(s[12]=[n("Twitter",-1)])]),_:1}),s[14]||(s[14]=n(" 上與我聯繫。",-1))]),s[34]||(s[34]=a("hr",null,null,-1)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/7/introduction-go-arrays-and-slices"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/18/7/introduction-go-arrays-and-slices",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/mtsouk"},{default:i(()=>[...s[17]||(s[17]=[n("Mihalis Tsoukalos",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[18]||(s[18]=[n("lkxed",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[19]||(s[19]=[n("lkxed",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const C=l(c,[["render",g]]);export{x as __pageData,C as default};
