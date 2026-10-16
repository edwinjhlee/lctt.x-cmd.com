import{_ as t,a0 as r,w as o,s as c,ao as l,I as n,x as a,a1 as i,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"全面教程：在 RxJS 中創建流 | LCTT x X-CMD","titleTemplate":false,"description":"全面教程：在 RxJS 中創建流 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"全面教程：在 RxJS 中創建流 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"全面教程：在 RxJS 中創建流 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20170709 The Extensive Guide to Creating Streams in RxJS","title":"全面教程：在 RxJS 中創建流","tag":"201809","desc":""},"relativePath":"201809/20170709 The Extensive Guide to Creating Streams in RxJS.md","filePath":"[post].md"}'),d={name:"201809/20170709 The Extensive Guide to Creating Streams in RxJS.md"};function h(b,s,g,k,u,f){const e=r("Link");return o(),c("div",null,[s[71]||(s[71]=l(`<h1 id="全面教程-在-rxjs-中創建流" tabindex="-1">全面教程：在 RxJS 中創建流 <a class="header-anchor" href="#全面教程-在-rxjs-中創建流" aria-label="Permalink to “全面教程：在 RxJS 中創建流”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/900/1*hj8mGnl5tM_lAlx5_vqS-Q.jpeg" alt=""></p><p>對大多數開發者來説，與 RxJS 的初次接觸是通過庫的形式，就像 Angular。一些函數會返回<ruby>流<rt>stream</rt></ruby>，要使用它們就得把注意力放在操作符上。</p><p>有些時候，混用響應式和非響應式代碼似乎很有用。然後大家就開始熱衷流的創造。不論是在編寫異步代碼或者是數據處理時，流都是一個不錯的方案。</p><p>RxJS 提供很多方式來創建流。不管你遇到的是什麼情況，都會有一個完美的創建流的方式。你可能根本用不上它們，但瞭解它們可以節省你的時間，讓你少碼一些代碼。</p><p>我把所有可能的方法，按它們的主要目的，放在四個分類當中：</p><ul><li>流式化現有數據</li><li>生成數據</li><li>使用現有 API 進行交互</li><li>選擇現有的流，並結合起來</li></ul><p>注意：示例用的是 RxJS 6，可能會以前的版本有所不同。已知的區別是你導入函數的方式不同了。</p><p>RxJS 6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import {of, from} from &#39;rxjs&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>of(...);</span></span>
<span class="line"><span>from(...);</span></span></code></pre></div><p>RxJS &lt; 6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { Observable } from &#39;rxjs/Observable&#39;;</span></span>
<span class="line"><span>import &#39;rxjs/add/observable/of&#39;;</span></span>
<span class="line"><span>import &#39;rxjs/add/observable/from&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Observable.of(...);</span></span>
<span class="line"><span>Observable.from(...);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//或</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { of } from &#39;rxjs/observable/of&#39;;</span></span>
<span class="line"><span>import { from } from &#39;rxjs/observable/from&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>of(...);</span></span>
<span class="line"><span>from(...);</span></span></code></pre></div><p>流的圖示中的標記：</p><ul><li><code>|</code> 表示流結束了</li><li><code>X</code> 表示流出現錯誤並被終結</li><li><code>...</code> 表示流的走向不定</li></ul><h3 id="流式化已有數據" tabindex="-1">流式化已有數據 <a class="header-anchor" href="#流式化已有數據" aria-label="Permalink to “流式化已有數據”">​</a></h3>`,15)),n("p",null,[s[1]||(s[1]=a("你有一些數據，想把它們放到流中。有三種方式，並且都允許你把調度器當作最後一個參數傳入（你如果想深入瞭解調度器，可以看看我的 ",-1)),i(e,{href:"https://itnext.io/concurrency-and-asynchronous-behavior-with-rxjs-11b0c4b22597"},{default:p(()=>[...s[0]||(s[0]=[a("上一篇文章",-1)])]),_:1}),s[2]||(s[2]=a("）。這些生成的流都是靜態的。",-1))]),s[72]||(s[72]=l(`<h4 id="of" tabindex="-1">of <a class="header-anchor" href="#of" aria-label="Permalink to “of”">​</a></h4><p>如果只有一個或者一些不同的元素，使用 <code>of</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>of(1,2,3)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 2 3 |</span></span></code></pre></div><h4 id="from" tabindex="-1">from <a class="header-anchor" href="#from" aria-label="Permalink to “from”">​</a></h4><p>如果有一個數組或者 <em>可迭代的對象</em> ，而且你想要其中的所有元素髮送到流中，使用 <code>from</code>。你也可以用它來把一個 promise 對象變成可觀測的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const foo = [1,2,3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from(foo)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 2 3 |</span></span></code></pre></div><h4 id="pairs" tabindex="-1">pairs <a class="header-anchor" href="#pairs" aria-label="Permalink to “pairs”">​</a></h4><p>流式化一個對象的鍵/值對。用這個對象表示字典時特別有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const foo = { a: 1, b: 2};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pairs(foo)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// [a,1] [b,2] |</span></span></code></pre></div><h4 id="那麼其他的數據結構呢" tabindex="-1">那麼其他的數據結構呢？ <a class="header-anchor" href="#那麼其他的數據結構呢" aria-label="Permalink to “那麼其他的數據結構呢？”">​</a></h4><p>也許你的數據存儲在自定義的結構中，而它又沒有實現 <em>可迭代的對象</em> 接口，又或者説你的結構是遞歸的、樹狀的。也許下面某種選擇適合這些情況：</p><ol><li>先將數據提取到數組裏</li><li>使用下一節將會講到的 <code>generate</code> 函數，遍歷所有數據</li><li>創建一個自定義流（見下一節）</li><li>創建一個迭代器</li></ol>`,15)),n("p",null,[s[4]||(s[4]=a("稍後會講到選項 2 和 3 ，因此這裏的重點是創建一個迭代器。我們可以對一個 ",-1)),s[5]||(s[5]=n("em",null,"可迭代的對象",-1)),s[6]||(s[6]=a(" 調用 ",-1)),s[7]||(s[7]=n("code",null,"from",-1)),s[8]||(s[8]=a(" 創建一個流。 ",-1)),s[9]||(s[9]=n("em",null,"可迭代的對象",-1)),s[10]||(s[10]=a(" 是一個對象，可以產生一個迭代器（如果你對細節感興趣，參考 ",-1)),i(e,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"},{default:p(()=>[...s[3]||(s[3]=[a("這篇 mdn 文章",-1)])]),_:1}),s[11]||(s[11]=a("）。",-1))]),n("p",null,[s[14]||(s[14]=a("創建一個迭代器的簡單方式是 ",-1)),n("ruby",null,[i(e,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"},{default:p(()=>[...s[12]||(s[12]=[a("生成函數",-1)])]),_:1}),s[13]||(s[13]=n("rt",null,"generator function",-1))]),s[15]||(s[15]=a("。當你調用一個生成函數時，它返回一個對象，該對象同時遵循 ",-1)),s[16]||(s[16]=n("em",null,"可迭代的對象",-1)),s[17]||(s[17]=a(" 接口和 ",-1)),s[18]||(s[18]=n("em",null,"迭代器",-1)),s[19]||(s[19]=a(" 接口。",-1))]),s[73]||(s[73]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 自定義的數據結構</span></span>
<span class="line"><span>class List {</span></span>
<span class="line"><span>  add(element) ...</span></span>
<span class="line"><span>  get(index) ...</span></span>
<span class="line"><span>  get size() ...</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function* listIterator(list) {</span></span>
<span class="line"><span>  for (let i = 0; i&lt;list.size; i++) {</span></span>
<span class="line"><span>    yield list.get(i);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const myList = new List();</span></span>
<span class="line"><span>myList.add(1);</span></span>
<span class="line"><span>myList.add(3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from(listIterator(myList))</span></span>
<span class="line"><span>  .subscribe(console.log);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 3 |</span></span></code></pre></div><p>調用 <code>listIterator</code> 函數時，返回值是一個 <em>可迭代的對象</em> / <em>迭代器</em> 。函數里面的代碼在調用 <code>subscribe</code> 前不會執行。</p><h3 id="生成數據" tabindex="-1">生成數據 <a class="header-anchor" href="#生成數據" aria-label="Permalink to “生成數據”">​</a></h3><p>你知道要發送哪些數據，但想（或者必須）動態生成它。所有函數的最後一個參數都可以用來接收一個調度器。他們產生靜態的流。</p><h4 id="範圍-range" tabindex="-1">範圍（<code>range</code>） <a class="header-anchor" href="#範圍-range" aria-label="Permalink to “範圍（range）”">​</a></h4><p>從初始值開始，發送一系列數字，直到完成了指定次數的迭代。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>range(10, 2)  // 從 10 開始，發送兩個值</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 10 11 |</span></span></code></pre></div><h4 id="間隔-interval-定時器-timer" tabindex="-1">間隔（<code>interval</code>） / 定時器（<code>timer</code>） <a class="header-anchor" href="#間隔-interval-定時器-timer" aria-label="Permalink to “間隔（interval） / 定時器（timer）”">​</a></h4><p>有點像範圍，但定時器是週期性的發送累加的數字（就是説，不是立即發送）。兩者的區別在於在於定時器允許你為第一個元素設定一個延遲。也可以只產生一個值，只要不指定週期。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interval(1000) // 每 1000ms = 1 秒 發送數據</span></span>
<span class="line"><span>  .subscribe()</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 0  1  2  3  4 ...</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>delay(5000, 1000) // 和上面相同，在開始前先等待 5000ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>delay(5000)</span></span>
<span class="line"><span>.subscribe(i =&gt; console.log(&quot;foo&quot;);</span></span>
<span class="line"><span>// 5 秒後打印 foo</span></span></code></pre></div><p>大多數定時器將會用來週期性的處理數據：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interval(10000).pipe(</span></span>
<span class="line"><span>  flatMap(i =&gt; fetch(&quot;https://server/stockTicker&quot;)</span></span>
<span class="line"><span>).subscribe(updateChart)</span></span></code></pre></div><p>這段代碼每 10 秒獲取一次數據，更新屏幕。</p><h4 id="生成-generate" tabindex="-1">生成（<code>generate </code>） <a class="header-anchor" href="#生成-generate" aria-label="Permalink to “生成（generate ）”">​</a></h4><p>這是個更加複雜的函數，允許你發送一系列任意類型的對象。它有一些重載，這裏你看到的是最有意思的部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>generate(</span></span>
<span class="line"><span>  0,           // 從這個值開始</span></span>
<span class="line"><span>  x =&gt; x &lt; 10, // 條件：只要值小於 10，就一直髮送</span></span>
<span class="line"><span>  x =&gt; x*2     // 迭代：前一個值加倍</span></span>
<span class="line"><span>).subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 2 4 8 |</span></span></code></pre></div><p>你也可以用它來迭代值，如果一個結構沒有實現 <em>可迭代的對象</em> 接口。我們用前面的列表例子來進行演示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const myList = new List();</span></span>
<span class="line"><span>myList.add(1);</span></span>
<span class="line"><span>myList.add(3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate(</span></span>
<span class="line"><span>  0,                  // 從這個值開始</span></span>
<span class="line"><span>  i =&gt; i &lt; list.size, // 條件：發送數據，直到遍歷完整個列表</span></span>
<span class="line"><span>  i =&gt; ++i,           // 迭代：獲取下一個索引</span></span>
<span class="line"><span>  i =&gt; list.get(i)    // 選擇器：從列表中取值</span></span>
<span class="line"><span>).subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 3 |</span></span></code></pre></div><p>如你所見，我添加了另一個參數：選擇器。它和 <code>map</code> 操作符作用類似，將生成的值轉換為更有用的東西。</p><h3 id="空的流" tabindex="-1">空的流 <a class="header-anchor" href="#空的流" aria-label="Permalink to “空的流”">​</a></h3><p>有時候你要傳遞或返回一個不用發送任何數據的流。有三個函數分別用於不同的情況。你可以給這三個函數傳遞調度器。<code>empty</code> 和 <code>throwError</code> 接收一個調度器參數。</p><h4 id="empty" tabindex="-1"><code>empty</code> <a class="header-anchor" href="#empty" aria-label="Permalink to “empty”">​</a></h4><p>創建一個空的流，一個值也不發送。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>empty()</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// |</span></span></code></pre></div><h4 id="never" tabindex="-1"><code>never</code> <a class="header-anchor" href="#never" aria-label="Permalink to “never”">​</a></h4><p>創建一個永遠不會結束的流，仍然不發送值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>never()</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// ...</span></span></code></pre></div><h4 id="throwerror" tabindex="-1"><code>throwError</code> <a class="header-anchor" href="#throwerror" aria-label="Permalink to “throwError”">​</a></h4><p>創建一個流，流出現錯誤，不發送數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>throwError(&#39;error&#39;)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// X</span></span></code></pre></div><h3 id="掛鈎已有的-api" tabindex="-1">掛鈎已有的 API <a class="header-anchor" href="#掛鈎已有的-api" aria-label="Permalink to “掛鈎已有的 API”">​</a></h3><p>不是所有的庫和所有你之前寫的代碼使用或者支持流。幸運的是 RxJS 提供函數用來橋接非響應式和響應式代碼。這一節僅僅討論 RxJS 為橋接代碼提供的模版。</p>`,41)),n("p",null,[s[22]||(s[22]=a("你可能還對這篇出自 ",-1)),i(e,{href:"https://medium.com/@benlesh"},{default:p(()=>[...s[20]||(s[20]=[a("Ben Lesh",-1)])]),_:1}),s[23]||(s[23]=a(" 的 ",-1)),i(e,{href:"https://medium.com/@benlesh/rxjs-observable-interop-with-promises-and-async-await-bebb05306875"},{default:p(()=>[...s[21]||(s[21]=[a("全面的文章",-1)])]),_:1}),s[24]||(s[24]=a(" 感興趣，這篇文章講了幾乎所有能與 promises 交互操作的方式。",-1))]),s[74]||(s[74]=l(`<h4 id="from-1" tabindex="-1"><code>from</code> <a class="header-anchor" href="#from-1" aria-label="Permalink to “from”">​</a></h4><p>我們已經用過它，把它列在這裏是因為，它可以封裝一個含有 observable 對象的 promise 對象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from(new Promise(resolve =&gt; resolve(1)))</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 |</span></span></code></pre></div><h4 id="fromevent" tabindex="-1">fromEvent <a class="header-anchor" href="#fromevent" aria-label="Permalink to “fromEvent”">​</a></h4><p>fromEvent 為 DOM 元素添加一個事件監聽器，我確定你知道這個。但你可能不知道的是，也可以通過其它類型來添加事件監聽器，例如，一個 jQuery 對象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const element = $(&#39;#fooButton&#39;); // 從 DOM 元素中創建一個 jQuery 對象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from(element, &#39;click&#39;)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// clickEvent ...</span></span></code></pre></div><h4 id="fromeventpattern" tabindex="-1">fromEventPattern <a class="header-anchor" href="#fromeventpattern" aria-label="Permalink to “fromEventPattern”">​</a></h4><p>要理解為什麼有 fromEvent 了還需要 fromEventPattern，我們得先理解 fromEvent 是如何工作的。看這段代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from(document, &#39;click&#39;)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><p>這告訴 RxJS 我們想要監聽 document 中的點擊事件。在提交過程中，RxJS 發現 document 是一個 <em>EventTarget</em> 類型，因此它可以調用它的 <code>addEventListener</code> 方法。如果我們傳入的是一個 jQuery 對象而非 document，那麼 RxJs 知道它得調用 <em>on</em> 方法。</p><p>這個例子用的是 <em>fromEventPattern</em> ，和 <em>fromEvent</em> 的工作基本上一樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function addClickHandler(handler) {</span></span>
<span class="line"><span>  document.addEventListener(&#39;click&#39;, handler);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function removeClickHandler(handler) {</span></span>
<span class="line"><span>  document.removeEventListener(&#39;click&#39;, handler);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fromEventPattern(</span></span>
<span class="line"><span>  addClickHandler,</span></span>
<span class="line"><span>  removeClickHandler,</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等效於</span></span>
<span class="line"><span>fromEvent(document, &#39;click&#39;)</span></span></code></pre></div><p>RxJS 自動創建實際的監聽器（ <em>handler</em> ）你的工作是添加或者移除監聽器。<em>fromEventPattern</em> 的目的基本上是告訴 RxJS 如何註冊和移除事件監聽器。</p><p>現在想像一下你使用了一個庫，你可以調用一個叫做 <em>registerListener</em> 的方法。我們不能再用 <em>fromEvent</em>，因為它並不知道該怎麼處理這個對象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const listeners = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Foo {</span></span>
<span class="line"><span>  registerListener(listener) {</span></span>
<span class="line"><span>    listeners.push(listener);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  emit(value) {</span></span>
<span class="line"><span>    listeners.forEach(listener =&gt; listener(value));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const foo = new Foo();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fromEventPattern(listener =&gt; foo.registerListener(listener))</span></span>
<span class="line"><span>  .subscribe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo.emit(1);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 ...</span></span></code></pre></div><p>當我們調用 <code>foo.emit(1)</code> 時，RxJS 中的監聽器將被調用，然後它就能把值發送到流中。</p><p>你也可以用它來監聽多個事件類型，或者結合所有可以通過回調進行通訊的 API，例如，WebWorker API:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const myWorker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fromEventPattern(</span></span>
<span class="line"><span>  handler =&gt; { myWorker.onmessage = handler },</span></span>
<span class="line"><span>  handler =&gt; { myWorker.onmessage = undefined }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// workerMessage ...</span></span></code></pre></div><h4 id="bindcallback" tabindex="-1">bindCallback <a class="header-anchor" href="#bindcallback" aria-label="Permalink to “bindCallback”">​</a></h4><p>它和 fromEventPattern 相似，但它能用於單個值。就在回調函數被調用時，流就結束了。用法當然也不一樣 —— 你可以用 bindCallBack 封裝函數，然後它就會在調用時魔術般的返回一個流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function foo(value, callback) {</span></span>
<span class="line"><span>  callback(value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 沒有流</span></span>
<span class="line"><span>foo(1, console.log); //prints 1 in the console</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有流</span></span>
<span class="line"><span>const reactiveFoo = bindCallback(foo); </span></span>
<span class="line"><span>// 當我們調用 reactiveFoo 時，它返回一個 observable 對象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reactiveFoo(1)</span></span>
<span class="line"><span>  .subscribe(console.log); // 在控制台打印 1</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 |</span></span></code></pre></div><h4 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-label="Permalink to “websocket”">​</a></h4><p>是的，你完全可以創建一個 websocket 連接然後把它暴露給流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { webSocket } from &#39;rxjs/webSocket&#39;; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>let socket$ = webSocket(&#39;ws://localhost:8081&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接收消息</span></span>
<span class="line"><span>socket$.subscribe(</span></span>
<span class="line"><span>  (msg) =&gt; console.log(&#39;message received: &#39; + msg),</span></span>
<span class="line"><span>  (err) =&gt; console.log(err),</span></span>
<span class="line"><span>  () =&gt; console.log(&#39;complete&#39;) * );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 發送消息</span></span>
<span class="line"><span>socket$.next(JSON.stringify({ op: &#39;hello&#39; }));</span></span></code></pre></div><p>把 websocket 功能添加到你的應用中真的很簡單。<em>websocket</em> 創建一個 subject。這意味着你可以訂閲它，通過調用 <code>next</code> 來獲得消息和發送消息。</p><h4 id="ajax" tabindex="-1">ajax <a class="header-anchor" href="#ajax" aria-label="Permalink to “ajax”">​</a></h4><p>如你所知：類似於 websocket，提供 AJAX 查詢的功能。你可能用了一個帶有 AJAX 功能的庫或者框架。或者你沒有用，那麼我建議使用 fetch（或者必要的話用 polyfill），把返回的 promise 封裝到一個 observable 對象中（參考稍後會講到的 <code>defer</code> 函數）。</p><h3 id="定製流" tabindex="-1">定製流 <a class="header-anchor" href="#定製流" aria-label="Permalink to “定製流”">​</a></h3><p>有時候已有的函數用起來並不是足夠靈活。或者你需要對訂閲有更強的控制。</p><h4 id="主題-subject" tabindex="-1">主題（<code>Subject</code>） <a class="header-anchor" href="#主題-subject" aria-label="Permalink to “主題（Subject）”">​</a></h4><p><code>Subject</code> 是一個特殊的對象，它使得你的能夠把數據發送到流中，並且能夠控制數據。<code>Subject</code> 本身就是一個可觀察對象，但如果你想要把流暴露給其它代碼，建議你使用 <code>asObservable</code> 方法。這樣你就不能意外調用原始方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new Subject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 2 |</span></span></code></pre></div><p>注意在訂閲前發送的值將會“丟失”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new Subject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><p>除了常規的 <code>Subject</code>，RxJS 還提供了三種特殊的版本。</p><p><code>AsyncSubject</code> 在結束後只發送最後的一個值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new AsyncSubject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 輸出</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><p><code>BehaviorSubject</code> 使得你能夠提供一個（默認的）值，如果當前沒有其它值發送的話，這個值會被髮送給每個訂閲者。否則訂閲者收到最後一個發送的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new BehaviorSubject(1);</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const subscription1 = observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subscription1.unsubscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 輸出</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subscription2 = observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 輸出</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><p><code>ReplaySubject</code> 存儲一定數量、或一定時間或所有的發送過的值。所有新的訂閲者將會獲得所有存儲了的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new ReplaySubject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 輸出</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>// 2</span></span></code></pre></div>`,52)),n("p",null,[s[30]||(s[30]=a("你可以在 ",-1)),i(e,{href:"http://reactivex.io/documentation/subject.html"},{default:p(()=>[...s[25]||(s[25]=[a("ReactiveX 文檔",-1)])]),_:1}),s[31]||(s[31]=a("（它提供了一些其它的連接） 裏面找到更多關於 ",-1)),s[32]||(s[32]=n("code",null,"Subject",-1)),s[33]||(s[33]=a(" 的信息。",-1)),i(e,{href:"https://medium.com/@benlesh"},{default:p(()=>[...s[26]||(s[26]=[a("Ben Lesh",-1)])]),_:1}),s[34]||(s[34]=a(" 在 ",-1)),i(e,{href:"https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93"},{default:p(()=>[...s[27]||(s[27]=[a("On The Subject Of Subjects",-1)])]),_:1}),s[35]||(s[35]=a(" 上面提供了一些關於 ",-1)),s[36]||(s[36]=n("code",null,"Subject",-1)),s[37]||(s[37]=a(" 的理解，",-1)),i(e,{href:"https://medium.com/@cartant"},{default:p(()=>[...s[28]||(s[28]=[a("Nicholas Jamieson",-1)])]),_:1}),s[38]||(s[38]=a(" 在 ",-1)),i(e,{href:"https://blog.angularindepth.com/rxjs-understanding-subjects-5c585188c3e1"},{default:p(()=>[...s[29]||(s[29]=[a("in RxJS: Understanding Subjects",-1)])]),_:1}),s[39]||(s[39]=a(" 上也提供了一些理解。",-1))]),s[75]||(s[75]=l(`<h4 id="可觀察對象" tabindex="-1">可觀察對象 <a class="header-anchor" href="#可觀察對象" aria-label="Permalink to “可觀察對象”">​</a></h4><p>你可以簡單地用 new 操作符創建一個可觀察對象。通過你傳入的函數，你可以控制流，只要有人訂閲了或者它接收到一個可以當成 <code>Subject</code> 使用的觀察者，這個函數就會被調用，比如，調用 <code>next</code>、<code>complet</code> 和 <code>error</code>。</p><p>讓我們回顧一下列表示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const myList = new List();</span></span>
<span class="line"><span>myList.add(1);</span></span>
<span class="line"><span>myList.add(3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Observable(observer =&gt; {</span></span>
<span class="line"><span>  for (let i = 0; i&lt;list.size; i++) {</span></span>
<span class="line"><span>    observer.next(list.get(i));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  observer.complete();</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 3 |</span></span></code></pre></div><p>這個函數可以返回一個 <code>unsubcribe</code> 函數，當有訂閲者取消訂閲時這個函數就會被調用。你可以用它來清楚或者執行一些收尾操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>new Observable(observer =&gt; {</span></span>
<span class="line"><span>  // 流式化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>                 //clean up</span></span>
<span class="line"><span>               };</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><h4 id="繼承可觀察對象" tabindex="-1">繼承可觀察對象 <a class="header-anchor" href="#繼承可觀察對象" aria-label="Permalink to “繼承可觀察對象”">​</a></h4><p>在有可用的操作符前，這是一種實現自定義操作符的方式。RxJS 在內部擴展了 <em>可觀察對象</em> 。<code>Subject</code> 就是一個例子，另一個是 <code>publisher</code> 操作符。它返回一個 <code>ConnectableObservable</code> 對象，該對象提供額外的方法 <code>connect</code>。</p><h4 id="實現-subscribable-接口" tabindex="-1">實現 <code>Subscribable</code> 接口 <a class="header-anchor" href="#實現-subscribable-接口" aria-label="Permalink to “實現 Subscribable 接口”">​</a></h4><p>有時候你已經用一個對象來保存狀態，並且能夠發送值。如果你實現了 <code>Subscribable</code> 接口，你可以把它轉換成一個可觀察對象。<code>Subscribable</code> 接口中只有一個 <code>subscribe</code> 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interface Subscribable&lt;T&gt; {  subscribe(observerOrNext?: PartialObserver&lt;T&gt; | ((value: T) =&gt; void), error?: (error: any) =&gt; void, complete?: () =&gt; void): Unsubscribable}</span></span></code></pre></div><h3 id="結合和選擇現有的流" tabindex="-1">結合和選擇現有的流 <a class="header-anchor" href="#結合和選擇現有的流" aria-label="Permalink to “結合和選擇現有的流”">​</a></h3>`,13)),n("p",null,[s[42]||(s[42]=a("知道怎麼創建一個獨立的流還不夠。有時候你有好幾個流但其實只需要一個。有些函數也可作為操作符，所以我不打算在這裏深入展開。推薦看看 ",-1)),i(e,{href:"https://medium.com/@maximus.koretskyi"},{default:p(()=>[...s[40]||(s[40]=[a("Max NgWizard K",-1)])]),_:1}),s[43]||(s[43]=a(" 所寫的一篇 ",-1)),i(e,{href:"https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511"},{default:p(()=>[...s[41]||(s[41]=[a("文章",-1)])]),_:1}),s[44]||(s[44]=a("，它還包含一些有趣的動畫。",-1))]),n("p",null,[s[46]||(s[46]=a("還有一個建議：你可以通過拖拽元素的方式交互式的使用結合操作，參考 ",-1)),i(e,{href:"http://rxmarbles.com/#merge"},{default:p(()=>[...s[45]||(s[45]=[a("RxMarbles",-1)])]),_:1}),s[47]||(s[47]=a("。",-1))]),s[76]||(s[76]=l(`<h4 id="observableinput-類型" tabindex="-1">ObservableInput 類型 <a class="header-anchor" href="#observableinput-類型" aria-label="Permalink to “ObservableInput 類型”">​</a></h4><p>期望接收流的操作符和函數通常不單獨和可觀察對象一起工作。相反，它們實際上期望的參數類型是 ObservableInput，定義如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type ObservableInput&lt;T&gt; = SubscribableOrPromise&lt;T&gt; | ArrayLike&lt;T&gt; | Iterable&lt;T&gt;;</span></span></code></pre></div><p>這意味着你可以傳遞一個 promises 或者數組卻不需要事先把他們轉換成可觀察對象。</p><h4 id="defer" tabindex="-1">defer <a class="header-anchor" href="#defer" aria-label="Permalink to “defer”">​</a></h4><p>主要的目的是把一個 observable 對象的創建延遲（<code>defer</code>）到有人想要訂閲的時間。在以下情況，這很有用：</p><ul><li>創建可觀察對象的開銷較大</li><li>你想要給每個訂閲者新的可觀察對象</li><li>你想要在訂閲時候選擇不同的可觀察對象</li><li>有些代碼必須在訂閲之後執行</li></ul><p>最後一點包含了一個並不起眼的用例：Promises（<code>defer</code> 也可以返回一個 promise 對象）。看看這個用到了 fetch API 的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function getUser(id) {</span></span>
<span class="line"><span>  console.log(&quot;fetching data&quot;);</span></span>
<span class="line"><span>  return fetch(\`https://server/user/\${id}\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const userPromise = getUser(1);</span></span>
<span class="line"><span>console.log(&quot;I don&#39;t want that request now&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其它地方</span></span>
<span class="line"><span>userPromise.then(response =&gt; console.log(&quot;done&quot;);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 輸出</span></span>
<span class="line"><span>// fetching data</span></span>
<span class="line"><span>// I don&#39;t want that request now</span></span>
<span class="line"><span>// done</span></span></code></pre></div><p>只要流在你訂閲的時候執行了，promise 就會立即執行。我們調用 <code>getUser</code> 的瞬間，就發送了一個請求，哪怕我們這個時候不想發送請求。當然，我們可以使用 <code>from</code> 來把一個 promise 對象轉換成可觀察對象，但我們傳遞的 promise 對象已經創建或執行了。<code>defer</code> 讓我們能夠等到訂閲才發送這個請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const user$ = defer(() =&gt; getUser(1));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&quot;I don&#39;t want that request now&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其它地方</span></span>
<span class="line"><span>user$.subscribe(response =&gt; console.log(&quot;done&quot;);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 輸出</span></span>
<span class="line"><span>// I don&#39;t want that request now</span></span>
<span class="line"><span>// fetching data</span></span>
<span class="line"><span>// done</span></span></code></pre></div><h4 id="iif" tabindex="-1">iif <a class="header-anchor" href="#iif" aria-label="Permalink to “iif”">​</a></h4><p><code>iif</code> 包含了一個關於 <code>defer</code> 的特殊用例：在訂閲時選擇兩個流中的一個：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>iif(</span></span>
<span class="line"><span>  () =&gt; new Date().getHours() &lt; 12,</span></span>
<span class="line"><span>  of(&quot;AM&quot;),</span></span>
<span class="line"><span>  of(&quot;PM&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// AM before noon, PM afterwards</span></span></code></pre></div><p>引用該文檔：</p>`,18)),n("blockquote",null,[n("p",null,[s[50]||(s[50]=a("實際上 ",-1)),i(e,{href:"https://rxjs-dev.firebaseapp.com/api/index/iif"},{default:p(()=>[...s[48]||(s[48]=[a("iif",-1)])]),_:1}),s[51]||(s[51]=a(" 能夠輕鬆地用 ",-1)),i(e,{href:"https://rxjs-dev.firebaseapp.com/api/index/defer"},{default:p(()=>[...s[49]||(s[49]=[a("defer",-1)])]),_:1}),s[52]||(s[52]=a(" 實現，它僅僅是出於方便和可讀性的目的。",-1))])]),s[77]||(s[77]=l(`<h4 id="onerrorresumenext" tabindex="-1">onErrorResumeNext <a class="header-anchor" href="#onerrorresumenext" aria-label="Permalink to “onErrorResumeNext”">​</a></h4><p>開啓第一個流並且在失敗的時候繼續進行下一個流。錯誤被忽略掉。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const stream1$ = of(1, 2).pipe(</span></span>
<span class="line"><span>  tap(i =&gt; { if(i&gt;1) throw &#39;error&#39;}) //fail after first element</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const stream2$ = of(3,4);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onErrorResumeNext(stream1$, stream2$)</span></span>
<span class="line"><span>  .subscribe(console.log);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 1 3 4 |</span></span></code></pre></div><p>如果你有多個 web 服務，這就很有用了。萬一主服務器開啓失敗，那麼備份的服務就能自動調用。</p><h4 id="forkjoin" tabindex="-1">forkJoin <a class="header-anchor" href="#forkjoin" aria-label="Permalink to “forkJoin”">​</a></h4><p>它讓流並行運行，當流結束時發送存在數組中的最後的值。由於每個流只有最後一個值被髮送，它一般用在只發送一個元素的流的情況，就像 HTTP 請求。你讓請求並行運行，在所有流收到響應時執行某些任務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function handleResponses([user, account]) {</span></span>
<span class="line"><span>  // 執行某些任務</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>forkJoin(</span></span>
<span class="line"><span>  fetch(&quot;https://server/user/1&quot;),</span></span>
<span class="line"><span>  fetch(&quot;https://server/account/1&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe(handleResponses);</span></span></code></pre></div><h4 id="merge-concat" tabindex="-1">merge / concat <a class="header-anchor" href="#merge-concat" aria-label="Permalink to “merge / concat”">​</a></h4><p>發送每一個從可觀察對象源中發出的值。</p><p><code>merge</code> 接收一個參數，讓你定義有多少流能被同時訂閲。默認是無限制的。設為 1 就意味着監聽一個源流，在它結束的時候訂閲下一個。由於這是一個常見的場景，RxJS 為你提供了一個顯示的函數：<code>concat</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>merge(</span></span>
<span class="line"><span>  interval(1000).pipe(mapTo(&quot;Stream 1&quot;), take(2)),</span></span>
<span class="line"><span>  interval(1200).pipe(mapTo(&quot;Stream 2&quot;), take(2)),</span></span>
<span class="line"><span>  timer(0, 1000).pipe(mapTo(&quot;Stream 3&quot;), take(2)),</span></span>
<span class="line"><span>  2 //two concurrent streams</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只訂閲流 1 和流 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 輸出</span></span>
<span class="line"><span>// Stream 1 -&gt; after 1000ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 1200ms</span></span>
<span class="line"><span>// Stream 1 -&gt; after 2000ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 流 1 結束後，開始訂閲流 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 輸出</span></span>
<span class="line"><span>// Stream 3 -&gt; after 0 ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 400 ms (2400ms from beginning)</span></span>
<span class="line"><span>// Stream 3 -&gt; after 1000ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>merge(</span></span>
<span class="line"><span>  interval(1000).pipe(mapTo(&quot;Stream 1&quot;), take(2)),</span></span>
<span class="line"><span>  interval(1200).pipe(mapTo(&quot;Stream 2&quot;), take(2))</span></span>
<span class="line"><span>  1</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>// 等效於</span></span>
<span class="line"><span>concat(</span></span>
<span class="line"><span>  interval(1000).pipe(mapTo(&quot;Stream 1&quot;), take(2)),</span></span>
<span class="line"><span>  interval(1200).pipe(mapTo(&quot;Stream 2&quot;), take(2))</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 輸出</span></span>
<span class="line"><span>// Stream 1 -&gt; after 1000ms</span></span>
<span class="line"><span>// Stream 1 -&gt; after 2000ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 3200ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 4400ms</span></span></code></pre></div><h4 id="zip-combinelatest" tabindex="-1">zip / combineLatest <a class="header-anchor" href="#zip-combinelatest" aria-label="Permalink to “zip / combineLatest”">​</a></h4><p><code>merge</code> 和 <code>concat</code> 一個接一個的發送所有從源流中讀到的值，而 <code>zip</code> 和 <code>combineLatest</code> 是把每個流中的一個值結合起來一起發送。<code>zip</code> 結合所有源流中發送的第一個值。如果流的內容相關聯，那麼這就很有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zip(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  interval(1200),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// [0, 0] [1, 1] [2, 2] ...</span></span></code></pre></div><p><code>combineLatest</code> 與之類似，但結合的是源流中發送的最後一個值。直到所有源流至少發送一個值之後才會觸發事件。這之後每次源流發送一個值，它都會把這個值與其他流發送的最後一個值結合起來。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>combineLatest(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  interval(1200),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// [0, 0] [1, 0] [1, 1] [2, 1] ...</span></span></code></pre></div><p>兩個函數都讓允許傳遞一個選擇器函數，把元素結合成其它對象而不是數組：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zip(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  interval(1200),</span></span>
<span class="line"><span>  (e1, e2) -&gt; e1 + e2</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// 0 2 4 6 ...</span></span></code></pre></div><h4 id="race" tabindex="-1">race <a class="header-anchor" href="#race" aria-label="Permalink to “race”">​</a></h4><p>選擇第一個發送數據的流。產生的流基本是最快的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>race(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  of(&quot;foo&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 結果</span></span>
<span class="line"><span>// foo |</span></span></code></pre></div><p>由於 <code>of</code> 立即產生一個值，因此它是最快的流，然而這個流就被選中了。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>已經有很多創建可觀察對象的方式了。如果你想要創造響應式的 API 或者想用響應式的 API 結合傳統 API，那麼瞭解這些方法很重要。</p>`,29)),n("p",null,[s[54]||(s[54]=a("我已經向你展示了所有可用的方法，但它們其實還有很多內容可以講。如果你想更加深入地瞭解，我極力推薦你查閲 ",-1)),i(e,{href:"http://reactivex.io/documentation/operators.html#creating"},{default:p(()=>[...s[53]||(s[53]=[a("文檔",-1)])]),_:1}),s[55]||(s[55]=a(" 或者閲讀相關文章。",-1))]),n("p",null,[i(e,{href:"https://rxviz.com/"},{default:p(()=>[...s[56]||(s[56]=[a("RxViz",-1)])]),_:1}),s[57]||(s[57]=a(" 是另一種值得了解的有意思的方式。你編寫 RxJS 代碼，產生的流可以用圖形或動畫進行顯示。",-1))]),s[78]||(s[78]=n("hr",null,null,-1)),n("p",null,[s[59]||(s[59]=a("via: ",-1)),i(e,{href:"https://blog.angularindepth.com/the-extensive-guide-to-creating-streams-in-rxjs-aaa02baaff9a"},{default:p(()=>[...s[58]||(s[58]=[a("https://blog.angularindepth.com/the-extensive-guide-to-creating-streams-in-rxjs-aaa02baaff9a",-1)])]),_:1})]),n("p",null,[s[63]||(s[63]=a("作者：",-1)),i(e,{href:"https://blog.angularindepth.com/@abetteroliver"},{default:p(()=>[...s[60]||(s[60]=[a("Oliver Flaggl",-1)])]),_:1}),s[64]||(s[64]=a(" 譯者：",-1)),i(e,{href:"https://github.com/BriFuture"},{default:p(()=>[...s[61]||(s[61]=[a("BriFuture",-1)])]),_:1}),s[65]||(s[65]=a(" 校對：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[62]||(s[62]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[68]||(s[68]=a("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[66]||(s[66]=[a("LCTT",-1)])]),_:1}),s[69]||(s[69]=a(" 原創編譯，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[67]||(s[67]=[a("Linux中國",-1)])]),_:1}),s[70]||(s[70]=a(" 榮譽推出",-1))])])}const x=t(d,[["render",h]]);export{y as __pageData,x as default};
