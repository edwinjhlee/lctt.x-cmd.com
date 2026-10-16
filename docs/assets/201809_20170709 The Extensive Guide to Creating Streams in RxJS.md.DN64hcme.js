import{_ as t,a0 as r,w as o,s as c,ao as l,I as n,x as a,a1 as i,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"全面教程：在 RxJS 中创建流 | LCTT x X-CMD","titleTemplate":false,"description":"全面教程：在 RxJS 中创建流 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"全面教程：在 RxJS 中创建流 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"全面教程：在 RxJS 中创建流 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20170709 The Extensive Guide to Creating Streams in RxJS","title":"全面教程：在 RxJS 中创建流","tag":"201809","desc":""},"relativePath":"201809/20170709 The Extensive Guide to Creating Streams in RxJS.md","filePath":"[post].md"}'),d={name:"201809/20170709 The Extensive Guide to Creating Streams in RxJS.md"};function h(b,s,g,k,u,f){const e=r("Link");return o(),c("div",null,[s[71]||(s[71]=l(`<h1 id="全面教程-在-rxjs-中创建流" tabindex="-1">全面教程：在 RxJS 中创建流 <a class="header-anchor" href="#全面教程-在-rxjs-中创建流" aria-label="Permalink to “全面教程：在 RxJS 中创建流”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/900/1*hj8mGnl5tM_lAlx5_vqS-Q.jpeg" alt=""></p><p>对大多数开发者来说，与 RxJS 的初次接触是通过库的形式，就像 Angular。一些函数会返回<ruby>流<rt>stream</rt></ruby>，要使用它们就得把注意力放在操作符上。</p><p>有些时候，混用响应式和非响应式代码似乎很有用。然后大家就开始热衷流的创造。不论是在编写异步代码或者是数据处理时，流都是一个不错的方案。</p><p>RxJS 提供很多方式来创建流。不管你遇到的是什么情况，都会有一个完美的创建流的方式。你可能根本用不上它们，但了解它们可以节省你的时间，让你少码一些代码。</p><p>我把所有可能的方法，按它们的主要目的，放在四个分类当中：</p><ul><li>流式化现有数据</li><li>生成数据</li><li>使用现有 API 进行交互</li><li>选择现有的流，并结合起来</li></ul><p>注意：示例用的是 RxJS 6，可能会以前的版本有所不同。已知的区别是你导入函数的方式不同了。</p><p>RxJS 6</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import {of, from} from &#39;rxjs&#39;;</span></span>
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
<span class="line"><span>from(...);</span></span></code></pre></div><p>流的图示中的标记：</p><ul><li><code>|</code> 表示流结束了</li><li><code>X</code> 表示流出现错误并被终结</li><li><code>...</code> 表示流的走向不定</li></ul><h3 id="流式化已有数据" tabindex="-1">流式化已有数据 <a class="header-anchor" href="#流式化已有数据" aria-label="Permalink to “流式化已有数据”">​</a></h3>`,15)),n("p",null,[s[1]||(s[1]=a("你有一些数据，想把它们放到流中。有三种方式，并且都允许你把调度器当作最后一个参数传入（你如果想深入了解调度器，可以看看我的 ",-1)),i(e,{href:"https://itnext.io/concurrency-and-asynchronous-behavior-with-rxjs-11b0c4b22597"},{default:p(()=>[...s[0]||(s[0]=[a("上一篇文章",-1)])]),_:1}),s[2]||(s[2]=a("）。这些生成的流都是静态的。",-1))]),s[72]||(s[72]=l(`<h4 id="of" tabindex="-1">of <a class="header-anchor" href="#of" aria-label="Permalink to “of”">​</a></h4><p>如果只有一个或者一些不同的元素，使用 <code>of</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>of(1,2,3)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 2 3 |</span></span></code></pre></div><h4 id="from" tabindex="-1">from <a class="header-anchor" href="#from" aria-label="Permalink to “from”">​</a></h4><p>如果有一个数组或者 <em>可迭代的对象</em> ，而且你想要其中的所有元素发送到流中，使用 <code>from</code>。你也可以用它来把一个 promise 对象变成可观测的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const foo = [1,2,3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from(foo)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 2 3 |</span></span></code></pre></div><h4 id="pairs" tabindex="-1">pairs <a class="header-anchor" href="#pairs" aria-label="Permalink to “pairs”">​</a></h4><p>流式化一个对象的键/值对。用这个对象表示字典时特别有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const foo = { a: 1, b: 2};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pairs(foo)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// [a,1] [b,2] |</span></span></code></pre></div><h4 id="那么其他的数据结构呢" tabindex="-1">那么其他的数据结构呢？ <a class="header-anchor" href="#那么其他的数据结构呢" aria-label="Permalink to “那么其他的数据结构呢？”">​</a></h4><p>也许你的数据存储在自定义的结构中，而它又没有实现 <em>可迭代的对象</em> 接口，又或者说你的结构是递归的、树状的。也许下面某种选择适合这些情况：</p><ol><li>先将数据提取到数组里</li><li>使用下一节将会讲到的 <code>generate</code> 函数，遍历所有数据</li><li>创建一个自定义流（见下一节）</li><li>创建一个迭代器</li></ol>`,15)),n("p",null,[s[4]||(s[4]=a("稍后会讲到选项 2 和 3 ，因此这里的重点是创建一个迭代器。我们可以对一个 ",-1)),s[5]||(s[5]=n("em",null,"可迭代的对象",-1)),s[6]||(s[6]=a(" 调用 ",-1)),s[7]||(s[7]=n("code",null,"from",-1)),s[8]||(s[8]=a(" 创建一个流。 ",-1)),s[9]||(s[9]=n("em",null,"可迭代的对象",-1)),s[10]||(s[10]=a(" 是一个对象，可以产生一个迭代器（如果你对细节感兴趣，参考 ",-1)),i(e,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"},{default:p(()=>[...s[3]||(s[3]=[a("这篇 mdn 文章",-1)])]),_:1}),s[11]||(s[11]=a("）。",-1))]),n("p",null,[s[14]||(s[14]=a("创建一个迭代器的简单方式是 ",-1)),n("ruby",null,[i(e,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"},{default:p(()=>[...s[12]||(s[12]=[a("生成函数",-1)])]),_:1}),s[13]||(s[13]=n("rt",null,"generator function",-1))]),s[15]||(s[15]=a("。当你调用一个生成函数时，它返回一个对象，该对象同时遵循 ",-1)),s[16]||(s[16]=n("em",null,"可迭代的对象",-1)),s[17]||(s[17]=a(" 接口和 ",-1)),s[18]||(s[18]=n("em",null,"迭代器",-1)),s[19]||(s[19]=a(" 接口。",-1))]),s[73]||(s[73]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 自定义的数据结构</span></span>
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
<span class="line"><span>  .subscribe(console.log);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 3 |</span></span></code></pre></div><p>调用 <code>listIterator</code> 函数时，返回值是一个 <em>可迭代的对象</em> / <em>迭代器</em> 。函数里面的代码在调用 <code>subscribe</code> 前不会执行。</p><h3 id="生成数据" tabindex="-1">生成数据 <a class="header-anchor" href="#生成数据" aria-label="Permalink to “生成数据”">​</a></h3><p>你知道要发送哪些数据，但想（或者必须）动态生成它。所有函数的最后一个参数都可以用来接收一个调度器。他们产生静态的流。</p><h4 id="范围-range" tabindex="-1">范围（<code>range</code>） <a class="header-anchor" href="#范围-range" aria-label="Permalink to “范围（range）”">​</a></h4><p>从初始值开始，发送一系列数字，直到完成了指定次数的迭代。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>range(10, 2)  // 从 10 开始，发送两个值</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 10 11 |</span></span></code></pre></div><h4 id="间隔-interval-定时器-timer" tabindex="-1">间隔（<code>interval</code>） / 定时器（<code>timer</code>） <a class="header-anchor" href="#间隔-interval-定时器-timer" aria-label="Permalink to “间隔（interval） / 定时器（timer）”">​</a></h4><p>有点像范围，但定时器是周期性的发送累加的数字（就是说，不是立即发送）。两者的区别在于在于定时器允许你为第一个元素设定一个延迟。也可以只产生一个值，只要不指定周期。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interval(1000) // 每 1000ms = 1 秒 发送数据</span></span>
<span class="line"><span>  .subscribe()</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 0  1  2  3  4 ...</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>delay(5000, 1000) // 和上面相同，在开始前先等待 5000ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>delay(5000)</span></span>
<span class="line"><span>.subscribe(i =&gt; console.log(&quot;foo&quot;);</span></span>
<span class="line"><span>// 5 秒后打印 foo</span></span></code></pre></div><p>大多数定时器将会用来周期性的处理数据：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interval(10000).pipe(</span></span>
<span class="line"><span>  flatMap(i =&gt; fetch(&quot;https://server/stockTicker&quot;)</span></span>
<span class="line"><span>).subscribe(updateChart)</span></span></code></pre></div><p>这段代码每 10 秒获取一次数据，更新屏幕。</p><h4 id="生成-generate" tabindex="-1">生成（<code>generate </code>） <a class="header-anchor" href="#生成-generate" aria-label="Permalink to “生成（generate ）”">​</a></h4><p>这是个更加复杂的函数，允许你发送一系列任意类型的对象。它有一些重载，这里你看到的是最有意思的部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>generate(</span></span>
<span class="line"><span>  0,           // 从这个值开始</span></span>
<span class="line"><span>  x =&gt; x &lt; 10, // 条件：只要值小于 10，就一直发送</span></span>
<span class="line"><span>  x =&gt; x*2     // 迭代：前一个值加倍</span></span>
<span class="line"><span>).subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 2 4 8 |</span></span></code></pre></div><p>你也可以用它来迭代值，如果一个结构没有实现 <em>可迭代的对象</em> 接口。我们用前面的列表例子来进行演示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const myList = new List();</span></span>
<span class="line"><span>myList.add(1);</span></span>
<span class="line"><span>myList.add(3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate(</span></span>
<span class="line"><span>  0,                  // 从这个值开始</span></span>
<span class="line"><span>  i =&gt; i &lt; list.size, // 条件：发送数据，直到遍历完整个列表</span></span>
<span class="line"><span>  i =&gt; ++i,           // 迭代：获取下一个索引</span></span>
<span class="line"><span>  i =&gt; list.get(i)    // 选择器：从列表中取值</span></span>
<span class="line"><span>).subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 3 |</span></span></code></pre></div><p>如你所见，我添加了另一个参数：选择器。它和 <code>map</code> 操作符作用类似，将生成的值转换为更有用的东西。</p><h3 id="空的流" tabindex="-1">空的流 <a class="header-anchor" href="#空的流" aria-label="Permalink to “空的流”">​</a></h3><p>有时候你要传递或返回一个不用发送任何数据的流。有三个函数分别用于不同的情况。你可以给这三个函数传递调度器。<code>empty</code> 和 <code>throwError</code> 接收一个调度器参数。</p><h4 id="empty" tabindex="-1"><code>empty</code> <a class="header-anchor" href="#empty" aria-label="Permalink to “empty”">​</a></h4><p>创建一个空的流，一个值也不发送。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>empty()</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// |</span></span></code></pre></div><h4 id="never" tabindex="-1"><code>never</code> <a class="header-anchor" href="#never" aria-label="Permalink to “never”">​</a></h4><p>创建一个永远不会结束的流，仍然不发送值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>never()</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// ...</span></span></code></pre></div><h4 id="throwerror" tabindex="-1"><code>throwError</code> <a class="header-anchor" href="#throwerror" aria-label="Permalink to “throwError”">​</a></h4><p>创建一个流，流出现错误，不发送数据。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>throwError(&#39;error&#39;)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// X</span></span></code></pre></div><h3 id="挂钩已有的-api" tabindex="-1">挂钩已有的 API <a class="header-anchor" href="#挂钩已有的-api" aria-label="Permalink to “挂钩已有的 API”">​</a></h3><p>不是所有的库和所有你之前写的代码使用或者支持流。幸运的是 RxJS 提供函数用来桥接非响应式和响应式代码。这一节仅仅讨论 RxJS 为桥接代码提供的模版。</p>`,41)),n("p",null,[s[22]||(s[22]=a("你可能还对这篇出自 ",-1)),i(e,{href:"https://medium.com/@benlesh"},{default:p(()=>[...s[20]||(s[20]=[a("Ben Lesh",-1)])]),_:1}),s[23]||(s[23]=a(" 的 ",-1)),i(e,{href:"https://medium.com/@benlesh/rxjs-observable-interop-with-promises-and-async-await-bebb05306875"},{default:p(()=>[...s[21]||(s[21]=[a("全面的文章",-1)])]),_:1}),s[24]||(s[24]=a(" 感兴趣，这篇文章讲了几乎所有能与 promises 交互操作的方式。",-1))]),s[74]||(s[74]=l(`<h4 id="from-1" tabindex="-1"><code>from</code> <a class="header-anchor" href="#from-1" aria-label="Permalink to “from”">​</a></h4><p>我们已经用过它，把它列在这里是因为，它可以封装一个含有 observable 对象的 promise 对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from(new Promise(resolve =&gt; resolve(1)))</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 |</span></span></code></pre></div><h4 id="fromevent" tabindex="-1">fromEvent <a class="header-anchor" href="#fromevent" aria-label="Permalink to “fromEvent”">​</a></h4><p>fromEvent 为 DOM 元素添加一个事件监听器，我确定你知道这个。但你可能不知道的是，也可以通过其它类型来添加事件监听器，例如，一个 jQuery 对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const element = $(&#39;#fooButton&#39;); // 从 DOM 元素中创建一个 jQuery 对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from(element, &#39;click&#39;)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// clickEvent ...</span></span></code></pre></div><h4 id="fromeventpattern" tabindex="-1">fromEventPattern <a class="header-anchor" href="#fromeventpattern" aria-label="Permalink to “fromEventPattern”">​</a></h4><p>要理解为什么有 fromEvent 了还需要 fromEventPattern，我们得先理解 fromEvent 是如何工作的。看这段代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from(document, &#39;click&#39;)</span></span>
<span class="line"><span>  .subscribe();</span></span></code></pre></div><p>这告诉 RxJS 我们想要监听 document 中的点击事件。在提交过程中，RxJS 发现 document 是一个 <em>EventTarget</em> 类型，因此它可以调用它的 <code>addEventListener</code> 方法。如果我们传入的是一个 jQuery 对象而非 document，那么 RxJs 知道它得调用 <em>on</em> 方法。</p><p>这个例子用的是 <em>fromEventPattern</em> ，和 <em>fromEvent</em> 的工作基本上一样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function addClickHandler(handler) {</span></span>
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
<span class="line"><span>// 等效于</span></span>
<span class="line"><span>fromEvent(document, &#39;click&#39;)</span></span></code></pre></div><p>RxJS 自动创建实际的监听器（ <em>handler</em> ）你的工作是添加或者移除监听器。<em>fromEventPattern</em> 的目的基本上是告诉 RxJS 如何注册和移除事件监听器。</p><p>现在想象一下你使用了一个库，你可以调用一个叫做 <em>registerListener</em> 的方法。我们不能再用 <em>fromEvent</em>，因为它并不知道该怎么处理这个对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const listeners = [];</span></span>
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
<span class="line"><span>foo.emit(1);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 ...</span></span></code></pre></div><p>当我们调用 <code>foo.emit(1)</code> 时，RxJS 中的监听器将被调用，然后它就能把值发送到流中。</p><p>你也可以用它来监听多个事件类型，或者结合所有可以通过回调进行通讯的 API，例如，WebWorker API:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const myWorker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fromEventPattern(</span></span>
<span class="line"><span>  handler =&gt; { myWorker.onmessage = handler },</span></span>
<span class="line"><span>  handler =&gt; { myWorker.onmessage = undefined }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// workerMessage ...</span></span></code></pre></div><h4 id="bindcallback" tabindex="-1">bindCallback <a class="header-anchor" href="#bindcallback" aria-label="Permalink to “bindCallback”">​</a></h4><p>它和 fromEventPattern 相似，但它能用于单个值。就在回调函数被调用时，流就结束了。用法当然也不一样 —— 你可以用 bindCallBack 封装函数，然后它就会在调用时魔术般的返回一个流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function foo(value, callback) {</span></span>
<span class="line"><span>  callback(value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 没有流</span></span>
<span class="line"><span>foo(1, console.log); //prints 1 in the console</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有流</span></span>
<span class="line"><span>const reactiveFoo = bindCallback(foo); </span></span>
<span class="line"><span>// 当我们调用 reactiveFoo 时，它返回一个 observable 对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reactiveFoo(1)</span></span>
<span class="line"><span>  .subscribe(console.log); // 在控制台打印 1</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 |</span></span></code></pre></div><h4 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-label="Permalink to “websocket”">​</a></h4><p>是的，你完全可以创建一个 websocket 连接然后把它暴露给流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { webSocket } from &#39;rxjs/webSocket&#39;; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>let socket$ = webSocket(&#39;ws://localhost:8081&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接收消息</span></span>
<span class="line"><span>socket$.subscribe(</span></span>
<span class="line"><span>  (msg) =&gt; console.log(&#39;message received: &#39; + msg),</span></span>
<span class="line"><span>  (err) =&gt; console.log(err),</span></span>
<span class="line"><span>  () =&gt; console.log(&#39;complete&#39;) * );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发送消息</span></span>
<span class="line"><span>socket$.next(JSON.stringify({ op: &#39;hello&#39; }));</span></span></code></pre></div><p>把 websocket 功能添加到你的应用中真的很简单。<em>websocket</em> 创建一个 subject。这意味着你可以订阅它，通过调用 <code>next</code> 来获得消息和发送消息。</p><h4 id="ajax" tabindex="-1">ajax <a class="header-anchor" href="#ajax" aria-label="Permalink to “ajax”">​</a></h4><p>如你所知：类似于 websocket，提供 AJAX 查询的功能。你可能用了一个带有 AJAX 功能的库或者框架。或者你没有用，那么我建议使用 fetch（或者必要的话用 polyfill），把返回的 promise 封装到一个 observable 对象中（参考稍后会讲到的 <code>defer</code> 函数）。</p><h3 id="定制流" tabindex="-1">定制流 <a class="header-anchor" href="#定制流" aria-label="Permalink to “定制流”">​</a></h3><p>有时候已有的函数用起来并不是足够灵活。或者你需要对订阅有更强的控制。</p><h4 id="主题-subject" tabindex="-1">主题（<code>Subject</code>） <a class="header-anchor" href="#主题-subject" aria-label="Permalink to “主题（Subject）”">​</a></h4><p><code>Subject</code> 是一个特殊的对象，它使得你的能够把数据发送到流中，并且能够控制数据。<code>Subject</code> 本身就是一个可观察对象，但如果你想要把流暴露给其它代码，建议你使用 <code>asObservable</code> 方法。这样你就不能意外调用原始方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new Subject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 2 |</span></span></code></pre></div><p>注意在订阅前发送的值将会“丢失”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new Subject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><p>除了常规的 <code>Subject</code>，RxJS 还提供了三种特殊的版本。</p><p><code>AsyncSubject</code> 在结束后只发送最后的一个值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new AsyncSubject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 输出</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><p><code>BehaviorSubject</code> 使得你能够提供一个（默认的）值，如果当前没有其它值发送的话，这个值会被发送给每个订阅者。否则订阅者收到最后一个发送的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new BehaviorSubject(1);</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const subscription1 = observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subscription1.unsubscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 输出</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subscription2 = observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>// 2</span></span></code></pre></div><p><code>ReplaySubject</code> 存储一定数量、或一定时间或所有的发送过的值。所有新的订阅者将会获得所有存储了的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const subject = new ReplaySubject();</span></span>
<span class="line"><span>const observable = subject.asObservable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>observable.subscribe(console.log);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subject.next(2);</span></span>
<span class="line"><span>subject.complete();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 输出</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>// 2</span></span></code></pre></div>`,52)),n("p",null,[s[30]||(s[30]=a("你可以在 ",-1)),i(e,{href:"http://reactivex.io/documentation/subject.html"},{default:p(()=>[...s[25]||(s[25]=[a("ReactiveX 文档",-1)])]),_:1}),s[31]||(s[31]=a("（它提供了一些其它的连接） 里面找到更多关于 ",-1)),s[32]||(s[32]=n("code",null,"Subject",-1)),s[33]||(s[33]=a(" 的信息。",-1)),i(e,{href:"https://medium.com/@benlesh"},{default:p(()=>[...s[26]||(s[26]=[a("Ben Lesh",-1)])]),_:1}),s[34]||(s[34]=a(" 在 ",-1)),i(e,{href:"https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93"},{default:p(()=>[...s[27]||(s[27]=[a("On The Subject Of Subjects",-1)])]),_:1}),s[35]||(s[35]=a(" 上面提供了一些关于 ",-1)),s[36]||(s[36]=n("code",null,"Subject",-1)),s[37]||(s[37]=a(" 的理解，",-1)),i(e,{href:"https://medium.com/@cartant"},{default:p(()=>[...s[28]||(s[28]=[a("Nicholas Jamieson",-1)])]),_:1}),s[38]||(s[38]=a(" 在 ",-1)),i(e,{href:"https://blog.angularindepth.com/rxjs-understanding-subjects-5c585188c3e1"},{default:p(()=>[...s[29]||(s[29]=[a("in RxJS: Understanding Subjects",-1)])]),_:1}),s[39]||(s[39]=a(" 上也提供了一些理解。",-1))]),s[75]||(s[75]=l(`<h4 id="可观察对象" tabindex="-1">可观察对象 <a class="header-anchor" href="#可观察对象" aria-label="Permalink to “可观察对象”">​</a></h4><p>你可以简单地用 new 操作符创建一个可观察对象。通过你传入的函数，你可以控制流，只要有人订阅了或者它接收到一个可以当成 <code>Subject</code> 使用的观察者，这个函数就会被调用，比如，调用 <code>next</code>、<code>complet</code> 和 <code>error</code>。</p><p>让我们回顾一下列表示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const myList = new List();</span></span>
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
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 3 |</span></span></code></pre></div><p>这个函数可以返回一个 <code>unsubcribe</code> 函数，当有订阅者取消订阅时这个函数就会被调用。你可以用它来清楚或者执行一些收尾操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>new Observable(observer =&gt; {</span></span>
<span class="line"><span>  // 流式化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>                 //clean up</span></span>
<span class="line"><span>               };</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><h4 id="继承可观察对象" tabindex="-1">继承可观察对象 <a class="header-anchor" href="#继承可观察对象" aria-label="Permalink to “继承可观察对象”">​</a></h4><p>在有可用的操作符前，这是一种实现自定义操作符的方式。RxJS 在内部扩展了 <em>可观察对象</em> 。<code>Subject</code> 就是一个例子，另一个是 <code>publisher</code> 操作符。它返回一个 <code>ConnectableObservable</code> 对象，该对象提供额外的方法 <code>connect</code>。</p><h4 id="实现-subscribable-接口" tabindex="-1">实现 <code>Subscribable</code> 接口 <a class="header-anchor" href="#实现-subscribable-接口" aria-label="Permalink to “实现 Subscribable 接口”">​</a></h4><p>有时候你已经用一个对象来保存状态，并且能够发送值。如果你实现了 <code>Subscribable</code> 接口，你可以把它转换成一个可观察对象。<code>Subscribable</code> 接口中只有一个 <code>subscribe</code> 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interface Subscribable&lt;T&gt; {  subscribe(observerOrNext?: PartialObserver&lt;T&gt; | ((value: T) =&gt; void), error?: (error: any) =&gt; void, complete?: () =&gt; void): Unsubscribable}</span></span></code></pre></div><h3 id="结合和选择现有的流" tabindex="-1">结合和选择现有的流 <a class="header-anchor" href="#结合和选择现有的流" aria-label="Permalink to “结合和选择现有的流”">​</a></h3>`,13)),n("p",null,[s[42]||(s[42]=a("知道怎么创建一个独立的流还不够。有时候你有好几个流但其实只需要一个。有些函数也可作为操作符，所以我不打算在这里深入展开。推荐看看 ",-1)),i(e,{href:"https://medium.com/@maximus.koretskyi"},{default:p(()=>[...s[40]||(s[40]=[a("Max NgWizard K",-1)])]),_:1}),s[43]||(s[43]=a(" 所写的一篇 ",-1)),i(e,{href:"https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511"},{default:p(()=>[...s[41]||(s[41]=[a("文章",-1)])]),_:1}),s[44]||(s[44]=a("，它还包含一些有趣的动画。",-1))]),n("p",null,[s[46]||(s[46]=a("还有一个建议：你可以通过拖拽元素的方式交互式的使用结合操作，参考 ",-1)),i(e,{href:"http://rxmarbles.com/#merge"},{default:p(()=>[...s[45]||(s[45]=[a("RxMarbles",-1)])]),_:1}),s[47]||(s[47]=a("。",-1))]),s[76]||(s[76]=l(`<h4 id="observableinput-类型" tabindex="-1">ObservableInput 类型 <a class="header-anchor" href="#observableinput-类型" aria-label="Permalink to “ObservableInput 类型”">​</a></h4><p>期望接收流的操作符和函数通常不单独和可观察对象一起工作。相反，它们实际上期望的参数类型是 ObservableInput，定义如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type ObservableInput&lt;T&gt; = SubscribableOrPromise&lt;T&gt; | ArrayLike&lt;T&gt; | Iterable&lt;T&gt;;</span></span></code></pre></div><p>这意味着你可以传递一个 promises 或者数组却不需要事先把他们转换成可观察对象。</p><h4 id="defer" tabindex="-1">defer <a class="header-anchor" href="#defer" aria-label="Permalink to “defer”">​</a></h4><p>主要的目的是把一个 observable 对象的创建延迟（<code>defer</code>）到有人想要订阅的时间。在以下情况，这很有用：</p><ul><li>创建可观察对象的开销较大</li><li>你想要给每个订阅者新的可观察对象</li><li>你想要在订阅时候选择不同的可观察对象</li><li>有些代码必须在订阅之后执行</li></ul><p>最后一点包含了一个并不起眼的用例：Promises（<code>defer</code> 也可以返回一个 promise 对象）。看看这个用到了 fetch API 的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function getUser(id) {</span></span>
<span class="line"><span>  console.log(&quot;fetching data&quot;);</span></span>
<span class="line"><span>  return fetch(\`https://server/user/\${id}\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const userPromise = getUser(1);</span></span>
<span class="line"><span>console.log(&quot;I don&#39;t want that request now&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其它地方</span></span>
<span class="line"><span>userPromise.then(response =&gt; console.log(&quot;done&quot;);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 输出</span></span>
<span class="line"><span>// fetching data</span></span>
<span class="line"><span>// I don&#39;t want that request now</span></span>
<span class="line"><span>// done</span></span></code></pre></div><p>只要流在你订阅的时候执行了，promise 就会立即执行。我们调用 <code>getUser</code> 的瞬间，就发送了一个请求，哪怕我们这个时候不想发送请求。当然，我们可以使用 <code>from</code> 来把一个 promise 对象转换成可观察对象，但我们传递的 promise 对象已经创建或执行了。<code>defer</code> 让我们能够等到订阅才发送这个请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const user$ = defer(() =&gt; getUser(1));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&quot;I don&#39;t want that request now&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其它地方</span></span>
<span class="line"><span>user$.subscribe(response =&gt; console.log(&quot;done&quot;);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 输出</span></span>
<span class="line"><span>// I don&#39;t want that request now</span></span>
<span class="line"><span>// fetching data</span></span>
<span class="line"><span>// done</span></span></code></pre></div><h4 id="iif" tabindex="-1">iif <a class="header-anchor" href="#iif" aria-label="Permalink to “iif”">​</a></h4><p><code>iif</code> 包含了一个关于 <code>defer</code> 的特殊用例：在订阅时选择两个流中的一个：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>iif(</span></span>
<span class="line"><span>  () =&gt; new Date().getHours() &lt; 12,</span></span>
<span class="line"><span>  of(&quot;AM&quot;),</span></span>
<span class="line"><span>  of(&quot;PM&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// AM before noon, PM afterwards</span></span></code></pre></div><p>引用该文档：</p>`,18)),n("blockquote",null,[n("p",null,[s[50]||(s[50]=a("实际上 ",-1)),i(e,{href:"https://rxjs-dev.firebaseapp.com/api/index/iif"},{default:p(()=>[...s[48]||(s[48]=[a("iif",-1)])]),_:1}),s[51]||(s[51]=a(" 能够轻松地用 ",-1)),i(e,{href:"https://rxjs-dev.firebaseapp.com/api/index/defer"},{default:p(()=>[...s[49]||(s[49]=[a("defer",-1)])]),_:1}),s[52]||(s[52]=a(" 实现，它仅仅是出于方便和可读性的目的。",-1))])]),s[77]||(s[77]=l(`<h4 id="onerrorresumenext" tabindex="-1">onErrorResumeNext <a class="header-anchor" href="#onerrorresumenext" aria-label="Permalink to “onErrorResumeNext”">​</a></h4><p>开启第一个流并且在失败的时候继续进行下一个流。错误被忽略掉。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const stream1$ = of(1, 2).pipe(</span></span>
<span class="line"><span>  tap(i =&gt; { if(i&gt;1) throw &#39;error&#39;}) //fail after first element</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const stream2$ = of(3,4);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onErrorResumeNext(stream1$, stream2$)</span></span>
<span class="line"><span>  .subscribe(console.log);</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 1 3 4 |</span></span></code></pre></div><p>如果你有多个 web 服务，这就很有用了。万一主服务器开启失败，那么备份的服务就能自动调用。</p><h4 id="forkjoin" tabindex="-1">forkJoin <a class="header-anchor" href="#forkjoin" aria-label="Permalink to “forkJoin”">​</a></h4><p>它让流并行运行，当流结束时发送存在数组中的最后的值。由于每个流只有最后一个值被发送，它一般用在只发送一个元素的流的情况，就像 HTTP 请求。你让请求并行运行，在所有流收到响应时执行某些任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function handleResponses([user, account]) {</span></span>
<span class="line"><span>  // 执行某些任务</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>forkJoin(</span></span>
<span class="line"><span>  fetch(&quot;https://server/user/1&quot;),</span></span>
<span class="line"><span>  fetch(&quot;https://server/account/1&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe(handleResponses);</span></span></code></pre></div><h4 id="merge-concat" tabindex="-1">merge / concat <a class="header-anchor" href="#merge-concat" aria-label="Permalink to “merge / concat”">​</a></h4><p>发送每一个从可观察对象源中发出的值。</p><p><code>merge</code> 接收一个参数，让你定义有多少流能被同时订阅。默认是无限制的。设为 1 就意味着监听一个源流，在它结束的时候订阅下一个。由于这是一个常见的场景，RxJS 为你提供了一个显示的函数：<code>concat</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>merge(</span></span>
<span class="line"><span>  interval(1000).pipe(mapTo(&quot;Stream 1&quot;), take(2)),</span></span>
<span class="line"><span>  interval(1200).pipe(mapTo(&quot;Stream 2&quot;), take(2)),</span></span>
<span class="line"><span>  timer(0, 1000).pipe(mapTo(&quot;Stream 3&quot;), take(2)),</span></span>
<span class="line"><span>  2 //two concurrent streams</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只订阅流 1 和流 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>// Stream 1 -&gt; after 1000ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 1200ms</span></span>
<span class="line"><span>// Stream 1 -&gt; after 2000ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 流 1 结束后，开始订阅流 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>// Stream 3 -&gt; after 0 ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 400 ms (2400ms from beginning)</span></span>
<span class="line"><span>// Stream 3 -&gt; after 1000ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>merge(</span></span>
<span class="line"><span>  interval(1000).pipe(mapTo(&quot;Stream 1&quot;), take(2)),</span></span>
<span class="line"><span>  interval(1200).pipe(mapTo(&quot;Stream 2&quot;), take(2))</span></span>
<span class="line"><span>  1</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>// 等效于</span></span>
<span class="line"><span>concat(</span></span>
<span class="line"><span>  interval(1000).pipe(mapTo(&quot;Stream 1&quot;), take(2)),</span></span>
<span class="line"><span>  interval(1200).pipe(mapTo(&quot;Stream 2&quot;), take(2))</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>// Stream 1 -&gt; after 1000ms</span></span>
<span class="line"><span>// Stream 1 -&gt; after 2000ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 3200ms</span></span>
<span class="line"><span>// Stream 2 -&gt; after 4400ms</span></span></code></pre></div><h4 id="zip-combinelatest" tabindex="-1">zip / combineLatest <a class="header-anchor" href="#zip-combinelatest" aria-label="Permalink to “zip / combineLatest”">​</a></h4><p><code>merge</code> 和 <code>concat</code> 一个接一个的发送所有从源流中读到的值，而 <code>zip</code> 和 <code>combineLatest</code> 是把每个流中的一个值结合起来一起发送。<code>zip</code> 结合所有源流中发送的第一个值。如果流的内容相关联，那么这就很有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zip(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  interval(1200),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// [0, 0] [1, 1] [2, 2] ...</span></span></code></pre></div><p><code>combineLatest</code> 与之类似，但结合的是源流中发送的最后一个值。直到所有源流至少发送一个值之后才会触发事件。这之后每次源流发送一个值，它都会把这个值与其他流发送的最后一个值结合起来。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>combineLatest(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  interval(1200),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// [0, 0] [1, 0] [1, 1] [2, 1] ...</span></span></code></pre></div><p>两个函数都让允许传递一个选择器函数，把元素结合成其它对象而不是数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zip(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  interval(1200),</span></span>
<span class="line"><span>  (e1, e2) -&gt; e1 + e2</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// 0 2 4 6 ...</span></span></code></pre></div><h4 id="race" tabindex="-1">race <a class="header-anchor" href="#race" aria-label="Permalink to “race”">​</a></h4><p>选择第一个发送数据的流。产生的流基本是最快的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>race(</span></span>
<span class="line"><span>  interval(1000),</span></span>
<span class="line"><span>  of(&quot;foo&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.subscribe();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 结果</span></span>
<span class="line"><span>// foo |</span></span></code></pre></div><p>由于 <code>of</code> 立即产生一个值，因此它是最快的流，然而这个流就被选中了。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>已经有很多创建可观察对象的方式了。如果你想要创造响应式的 API 或者想用响应式的 API 结合传统 API，那么了解这些方法很重要。</p>`,29)),n("p",null,[s[54]||(s[54]=a("我已经向你展示了所有可用的方法，但它们其实还有很多内容可以讲。如果你想更加深入地了解，我极力推荐你查阅 ",-1)),i(e,{href:"http://reactivex.io/documentation/operators.html#creating"},{default:p(()=>[...s[53]||(s[53]=[a("文档",-1)])]),_:1}),s[55]||(s[55]=a(" 或者阅读相关文章。",-1))]),n("p",null,[i(e,{href:"https://rxviz.com/"},{default:p(()=>[...s[56]||(s[56]=[a("RxViz",-1)])]),_:1}),s[57]||(s[57]=a(" 是另一种值得了解的有意思的方式。你编写 RxJS 代码，产生的流可以用图形或动画进行显示。",-1))]),s[78]||(s[78]=n("hr",null,null,-1)),n("p",null,[s[59]||(s[59]=a("via: ",-1)),i(e,{href:"https://blog.angularindepth.com/the-extensive-guide-to-creating-streams-in-rxjs-aaa02baaff9a"},{default:p(()=>[...s[58]||(s[58]=[a("https://blog.angularindepth.com/the-extensive-guide-to-creating-streams-in-rxjs-aaa02baaff9a",-1)])]),_:1})]),n("p",null,[s[63]||(s[63]=a("作者：",-1)),i(e,{href:"https://blog.angularindepth.com/@abetteroliver"},{default:p(()=>[...s[60]||(s[60]=[a("Oliver Flaggl",-1)])]),_:1}),s[64]||(s[64]=a(" 译者：",-1)),i(e,{href:"https://github.com/BriFuture"},{default:p(()=>[...s[61]||(s[61]=[a("BriFuture",-1)])]),_:1}),s[65]||(s[65]=a(" 校对：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[62]||(s[62]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[68]||(s[68]=a("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[66]||(s[66]=[a("LCTT",-1)])]),_:1}),s[69]||(s[69]=a(" 原创编译，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[67]||(s[67]=[a("Linux中国",-1)])]),_:1}),s[70]||(s[70]=a(" 荣誉推出",-1))])])}const x=t(d,[["render",h]]);export{y as __pageData,x as default};
