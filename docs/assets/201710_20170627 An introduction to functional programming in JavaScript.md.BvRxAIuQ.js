import{_ as t,a0 as o,w as c,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"JavaScript 函数式编程介绍 | LCTT x X-CMD","titleTemplate":false,"description":"JavaScript 函数式编程介绍 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JavaScript 函数式编程介绍 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JavaScript 函数式编程介绍 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170627 An introduction to functional programming in JavaScript","title":"JavaScript 函数式编程介绍","tag":"201710","desc":""},"relativePath":"201710/20170627 An introduction to functional programming in JavaScript.md","filePath":"[post].md"}'),d={name:"201710/20170627 An introduction to functional programming in JavaScript.md"};function u(g,s,h,m,f,b){const p=o("Link");return c(),r("div",null,[s[72]||(s[72]=a("h1",{id:"javascript-函数式编程介绍",tabindex:"-1"},[n("JavaScript 函数式编程介绍 "),a("a",{class:"header-anchor",href:"#javascript-函数式编程介绍","aria-label":"Permalink to “JavaScript 函数式编程介绍”"},"​")],-1)),s[73]||(s[73]=a("blockquote",null,[a("p",null,"探索函数式编程，通过它让你的程序更具有可读性和易于调试")],-1)),s[74]||(s[74]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bus-rocket.png?itok=xQqKRMla",alt:"An introduction to functional programming in JavaScript",title:"An introduction to functional programming in JavaScript"})],-1)),a("blockquote",null,[a("p",null,[s[1]||(s[1]=n("Image credits : Steve Jurvetson via ",-1)),e(p,{href:"https://www.flickr.com/photos/jurvetson/882193732/"},{default:l(()=>[...s[0]||(s[0]=[n("Flickr",-1)])]),_:1}),s[2]||(s[2]=n(" (CC-BY-2.0)",-1))])]),a("p",null,[s[4]||(s[4]=n("当 Brendan Eich 在 1995 年创造 JavaScript 时，他原本打算",-1)),e(p,{href:"https://brendaneich.com/2008/04/popularity/"},{default:l(()=>[...s[3]||(s[3]=[n("将 Scheme 移植到浏览器里",-1)])]),_:1}),s[5]||(s[5]=n(" 。Scheme 作为 Lisp 的方言，是一种函数式编程语言。而当 Eich 被告知新的语言应该是一种可以与 Java 相比的脚本语言后，他最终确立了一种拥有 C 风格语法的语言（也和 Java 一样），但将函数视作一等公民。而 Java 直到版本 8 才从技术上将函数视为一等公民，虽然你可以用匿名类来模拟它。这个特性允许 JavaScript 通过函数式范式编程。",-1))]),a("p",null,[s[8]||(s[8]=n("JavaScript 是一个多范式语言，允许你自由地混合和使用面向对象式、过程式和函数式的编程范式。最近，函数式编程越来越火热。在诸如 ",-1)),e(p,{href:"https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html"},{default:l(()=>[...s[6]||(s[6]=[n("Angular",-1)])]),_:1}),s[9]||(s[9]=n(" 和 ",-1)),e(p,{href:"https://facebook.github.io/react/docs/optimizing-performance.html#the-power-of-not-mutating-data"},{default:l(()=>[...s[7]||(s[7]=[n("React",-1)])]),_:1}),s[10]||(s[10]=n(" 这样的框架中，通过使用不可变数据结构可以切实提高性能。不可变是函数式编程的核心原则，它以及纯函数使得编写和调试程序变得更加容易。使用函数来代替程序的循环可以提高程序的可读性并使它更加优雅。总之，函数式编程拥有很多优点。",-1))]),s[75]||(s[75]=i(`<h3 id="什么不是函数式编程" tabindex="-1">什么不是函数式编程 <a class="header-anchor" href="#什么不是函数式编程" aria-label="Permalink to “什么不是函数式编程”">​</a></h3><p>在讨论什么是函数式编程前，让我们先排除那些不属于函数式编程的东西。实际上它们是你需要丢弃的语言组件（再见，老朋友）：</p><ul><li>循环： <ul><li><code>while</code></li><li><code>do...while</code></li><li><code>for</code></li><li><code>for...of</code></li><li><code>for...in</code></li></ul></li><li>用 <code>var</code> 或者 <code>let</code> 来声明变量</li><li>没有返回值的函数</li><li>改变对象的属性 (比如: <code>o.x = 5;</code>)</li><li>改变数组本身的方法： <ul><li><code>copyWithin</code></li><li><code>fill</code></li><li><code>pop</code></li><li><code>push</code></li><li><code>reverse</code></li><li><code>shift</code></li><li><code>sort</code></li><li><code>splice</code></li><li><code>unshift</code></li></ul></li><li>改变映射本身的方法： <ul><li><code>clear</code></li><li><code>delete</code></li><li><code>set</code></li></ul></li><li>改变集合本身的方法： <ul><li><code>add</code></li><li><code>clear</code></li><li><code>delete</code></li></ul></li></ul><p>脱离这些特性应该如何编写程序呢？这是我们将在后面探索的问题。</p><h3 id="纯函数" tabindex="-1">纯函数 <a class="header-anchor" href="#纯函数" aria-label="Permalink to “纯函数”">​</a></h3><p>你的程序中包含函数不一定意味着你正在进行函数式编程。函数式范式将<ruby>纯函数<rt>pure function</rt></ruby>和<ruby>非纯函数<rt>impure function</rt></ruby>区分开。鼓励你编写纯函数。纯函数必须满足下面的两个属性：</p><ul><li>引用透明：函数在传入相同的参数后永远返回相同的返回值。这意味着该函数不依赖于任何可变状态。</li><li>无副作用：函数不能导致任何副作用。副作用可能包括 I/O（比如向终端或者日志文件写入），改变一个不可变的对象，对变量重新赋值等等。</li></ul><p>我们来看一些例子。首先，<code>multiply</code> 就是一个纯函数的例子，它在传入相同的参数后永远返回相同的返回值，并且不会导致副作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function multiply(a, b) {</span></span>
<span class="line"><span>  return a * b;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面是非纯函数的例子。<code>canRide</code> 函数依赖捕获的 <code>heightRequirement</code> 变量。被捕获的变量不一定导致一个函数是非纯函数，除非它是一个可变的变量（或者可以被重新赋值）。这种情况下使用 <code>let</code> 来声明这个变量，意味着可以对它重新赋值。<code>multiply</code> 函数是非纯函数，因为它会导致在 console 上输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let heightRequirement = 46;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Impure because it relies on a mutable (reassignable) variable.</span></span>
<span class="line"><span>function canRide(height) {</span></span>
<span class="line"><span>  return height &gt;= heightRequirement;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Impure because it causes a side-effect by logging to the console.</span></span>
<span class="line"><span>function multiply(a, b) {</span></span>
<span class="line"><span>  console.log(&#39;Arguments: &#39;, a, b);</span></span>
<span class="line"><span>  return a * b;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面的列表包含着 JavaScript 内置的非纯函数。你可以指出它们不满足两个属性中的哪个吗？</p><ul><li><code>console.log</code></li><li><code>element.addEventListener</code></li><li><code>Math.random</code></li><li><code>Date.now</code></li><li><code>$.ajax</code> (这里 <code>$</code> 代表你使用的 Ajax 库)</li></ul><p>理想的程序中所有的函数都是纯函数，但是从上面的函数列表可以看出，任何有意义的程序都将包含非纯函数。大多时候我们需要进行 AJAX 调用，检查当前日期或者获取一个随机数。一个好的经验法则是遵循 80/20 规则：函数中有 80％ 应该是纯函数，剩下的 20％ 的必要性将不可避免地是非纯函数。</p><p>使用纯函数有几个优点：</p><ul><li>它们很容易导出和调试，因为它们不依赖于可变的状态。</li><li>返回值可以被缓存或者“记忆”来避免以后重复计算。</li><li>它们很容易测试，因为没有需要模拟（mock）的依赖（比如日志，AJAX，数据库等等）。</li></ul><p>你编写或者使用的函数返回空（换句话说它没有返回值），那代表它是非纯函数。</p><h3 id="不变性" tabindex="-1">不变性 <a class="header-anchor" href="#不变性" aria-label="Permalink to “不变性”">​</a></h3><p>让我们回到捕获变量的概念上。来看看 <code>canRide</code> 函数。我们认为它是一个非纯函数，因为 <code>heightRequirement</code> 变量可以被重新赋值。下面是一个构造出来的例子来说明如何用不可预测的值来对它重新赋值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let heightRequirement = 46;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function canRide(height) {</span></span>
<span class="line"><span>  return height &gt;= heightRequirement;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Every half second, set heightRequirement to a random number between 0 and 200.</span></span>
<span class="line"><span>setInterval(() =&gt; heightRequirement = Math.floor(Math.random() * 201), 500);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const mySonsHeight = 47;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Every half second, check if my son can ride.</span></span>
<span class="line"><span>// Sometimes it will be true and sometimes it will be false.</span></span>
<span class="line"><span>setInterval(() =&gt; console.log(canRide(mySonsHeight)), 500);</span></span></code></pre></div><p>我要再次强调被捕获的变量不一定会使函数成为非纯函数。我们可以通过只是简单地改变 <code>heightRequirement</code> 的声明方式来使 <code>canRide</code> 函数成为纯函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const heightRequirement = 46;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function canRide(height) {</span></span>
<span class="line"><span>  return height &gt;= heightRequirement;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过用 <code>const</code> 来声明变量意味着它不能被再次赋值。如果尝试对它重新赋值，运行时引擎将抛出错误；那么，如果用对象来代替数字来存储所有的“常量”怎么样？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const constants = {</span></span>
<span class="line"><span>  heightRequirement: 46,</span></span>
<span class="line"><span>  // ... other constants go here</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function canRide(height) {</span></span>
<span class="line"><span>  return height &gt;= constants.heightRequirement;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们用了 <code>const</code> ，所以这个变量不能被重新赋值，但是还有一个问题：这个对象可以被改变。下面的代码展示了，为了真正使其不可变，你不仅需要防止它被重新赋值，你也需要不可变的数据结构。JavaScript 语言提供了 <code>Object.freeze</code> 方法来阻止对象被改变。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 1: 对象的属性是可变的，并且变量可以被再次赋值。</span></span>
<span class="line"><span>let o1 = { foo: &#39;bar&#39; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 改变对象的属性</span></span>
<span class="line"><span>o1.foo = &#39;something different&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 对变量再次赋值</span></span>
<span class="line"><span>o1 = { message: &quot;I&#39;m a completely new object&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 2: 对象的属性还是可变的，但是变量不能被再次赋值。</span></span>
<span class="line"><span>const o2 = { foo: &#39;baz&#39; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 仍然能改变对象</span></span>
<span class="line"><span>o2.foo = &#39;Something different, yet again&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能对变量再次赋值</span></span>
<span class="line"><span>// o2 = { message: &#39;I will cause an error if you uncomment me&#39; };</span><span> // Error!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 3: 对象的属性是不可变的，但是变量可以被再次赋值。</span></span>
<span class="line"><span>let o3 = Object.freeze({ foo: &quot;Can&#39;t mutate me&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能改变对象的属性</span></span>
<span class="line"><span>// o3.foo = &#39;Come on, uncomment me. I dare ya!&#39;;</span><span> // Error!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 还是可以对变量再次赋值</span></span>
<span class="line"><span>o3 = { message: &quot;I&#39;m some other object, and I&#39;m even mutable -- so take that!&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 4: 对象的属性是不可变的，并且变量不能被再次赋值。这是我们想要的！！！！！！！！</span></span>
<span class="line"><span>const o4 = Object.freeze({ foo: &#39;never going to change me&#39; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能改变对象的属性</span></span>
<span class="line"><span>// o4.foo = &#39;talk to the hand&#39;</span><span> // Error!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能对变量再次赋值</span></span>
<span class="line"><span>// o4 = { message: &quot;ain&#39;t gonna happen, sorry&quot; };</span><span> // Error</span></span></code></pre></div><p>不变性适用于所有的数据结构，包括数组、映射和集合。它意味着不能调用例如 <code>Array.prototype.push</code> 等会导致本身改变的方法，因为它会改变已经存在的数组。可以通过创建一个含有原来元素和新加元素的新数组，而不是将新元素加入一个已经存在的数组。其实所有会导致数组本身被修改的方法都可以通过一个返回修改好的新数组的函数代替。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const a = Object.freeze([4, 5, 6]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: a.push(7, 8, 9);</span></span>
<span class="line"><span>const b = a.concat(7, 8, 9);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: a.pop();</span></span>
<span class="line"><span>const c = a.slice(0, -1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: a.unshift(1, 2, 3);</span></span>
<span class="line"><span>const d = [1, 2, 3].concat(a);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: a.shift();</span></span>
<span class="line"><span>const e = a.slice(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: a.sort(myCompareFunction);</span></span>
<span class="line"><span>const f = R.sort(myCompareFunction, a); // R = Ramda</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: a.reverse();</span></span>
<span class="line"><span>const g = R.reverse(a); // R = Ramda</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 留给读者的练习:</span></span>
<span class="line"><span>// copyWithin</span></span>
<span class="line"><span>// fill</span></span>
<span class="line"><span>// splice</span></span></code></pre></div>`,28)),a("p",null,[e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},{default:l(()=>[...s[11]||(s[11]=[n("映射",-1)])]),_:1}),s[13]||(s[13]=n(" 和 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},{default:l(()=>[...s[12]||(s[12]=[n("集合",-1)])]),_:1}),s[14]||(s[14]=n(" 也很相似。可以通过返回一个新的修改好的映射或者集合来代替使用会修改其本身的函数。",-1))]),s[76]||(s[76]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const map = new Map([</span></span>
<span class="line"><span>  [1, &#39;one&#39;],</span></span>
<span class="line"><span>  [2, &#39;two&#39;],</span></span>
<span class="line"><span>  [3, &#39;three&#39;]</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: map.set(4, &#39;four&#39;);</span></span>
<span class="line"><span>const map2 = new Map([...map, [4, &#39;four&#39;]]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: map.delete(1);</span></span>
<span class="line"><span>const map3 = new Map([...map].filter(([key]) =&gt; key !== 1));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: map.clear();</span></span>
<span class="line"><span>const map4 = new Map();</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const set = new Set([&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: set.add(&#39;D&#39;);</span></span>
<span class="line"><span>const set2 = new Set([...set, &#39;D&#39;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: set.delete(&#39;B&#39;);</span></span>
<span class="line"><span>const set3 = new Set([...set].filter(key =&gt; key !== &#39;B&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Instead of: set.clear();</span></span>
<span class="line"><span>const set4 = new Set();</span></span></code></pre></div><p>我想提一句如果你在使用 TypeScript（我非常喜欢 TypeScript），你可以用 <code>Readonly&lt;T&gt;</code>、<code>ReadonlyArray&lt;T&gt;</code>、<code>ReadonlyMap&lt;K, V&gt;</code> 和 <code>ReadonlySet&lt;T&gt;</code> 接口来在编译期检查你是否尝试更改这些对象，有则抛出编译错误。如果在对一个对象字面量或者数组调用 <code>Object.freeze</code>，编译器会自动推断它是只读的。由于映射和集合在其内部表达，所以在这些数据结构上调用 <code>Object.freeze</code> 不起作用。但是你可以轻松地告诉编译器它们是只读的变量。</p><p><img src="https://opensource.com/sites/default/files/u128651/typescript-readonly.png" alt="TypeScript Readonly Interfaces" title="TypeScript Readonly Interfaces"></p><p><em>TypeScript 只读接口</em></p>`,5)),a("p",null,[s[21]||(s[21]=n("好，所以我们可以通过创建新的对象来代替修改原来的对象，但是这样不会导致性能损失吗？当然会。确保在你自己的应用中做了性能测试。如果你需要提高性能，可以考虑使用 ",-1)),e(p,{href:"https://facebook.github.io/immutable-js/"},{default:l(()=>[...s[15]||(s[15]=[n("Immutable.js",-1)])]),_:1}),s[22]||(s[22]=n("。Immutable.js 用",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Persistent_data_structure"},{default:l(()=>[...s[16]||(s[16]=[n("持久的数据结构",-1)])]),_:1}),s[23]||(s[23]=n(" 实现了",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/List"},{default:l(()=>[...s[17]||(s[17]=[n("链表",-1)])]),_:1}),s[24]||(s[24]=n("、",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/Stack"},{default:l(()=>[...s[18]||(s[18]=[n("堆栈",-1)])]),_:1}),s[25]||(s[25]=n("、",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/Map"},{default:l(()=>[...s[19]||(s[19]=[n("映射",-1)])]),_:1}),s[26]||(s[26]=n("、",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/Set"},{default:l(()=>[...s[20]||(s[20]=[n("集合",-1)])]),_:1}),s[27]||(s[27]=n("和其他数据结构。使用了如同 Clojure 和 Scala 这样的函数式语言中相同的技术。",-1))]),s[77]||(s[77]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Use in place of \`[]\`.</span></span>
<span class="line"><span>const list1 = Immutable.List([&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]);</span></span>
<span class="line"><span>const list2 = list1.push(&#39;D&#39;, &#39;E&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log([...list1]); // [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span></span>
<span class="line"><span>console.log([...list2]); // [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Use in place of \`new Map()\`</span></span>
<span class="line"><span>const map1 = Immutable.Map([</span></span>
<span class="line"><span>  [&#39;one&#39;, 1],</span></span>
<span class="line"><span>  [&#39;two&#39;, 2],</span></span>
<span class="line"><span>  [&#39;three&#39;, 3]</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span>const map2 = map1.set(&#39;four&#39;, 4);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log([...map1]); // [[&#39;one&#39;, 1], [&#39;two&#39;, 2], [&#39;three&#39;, 3]]</span></span>
<span class="line"><span>console.log([...map2]); // [[&#39;one&#39;, 1], [&#39;two&#39;, 2], [&#39;three&#39;, 3], [&#39;four&#39;, 4]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Use in place of \`new Set()\`</span></span>
<span class="line"><span>const set1 = Immutable.Set([1, 2, 3, 3, 3, 3, 3, 4]);</span></span>
<span class="line"><span>const set2 = set1.add(5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log([...set1]); // [1, 2, 3, 4]</span></span>
<span class="line"><span>console.log([...set2]); // [1, 2, 3, 4, 5]</span></span></code></pre></div><h3 id="函数组合" tabindex="-1">函数组合 <a class="header-anchor" href="#函数组合" aria-label="Permalink to “函数组合”">​</a></h3><p>记不记得在中学时我们学过一些像 <code>(f ∘ g)(x)</code> 的东西？你那时可能想，“我什么时候会用到这些？”，好了，现在就用到了。你准备好了吗？<code>f ∘ g</code>读作 “函数 f 和函数 g 组合”。对它的理解有两种等价的方式，如等式所示： <code>(f ∘ g)(x) = f(g(x))</code>。你可以认为 <code>f ∘ g</code> 是一个单独的函数，或者视作将调用函数 <code>g</code> 的结果作为参数传给函数 <code>f</code>。注意这些函数是从右向左依次调用的，先执行 <code>g</code>，接下来执行 <code>f</code>。</p><p>关于函数组合的几个要点:</p><ol><li>我们可以组合任意数量的函数（不仅限于 2 个）。</li><li>组合函数的一个方式是简单地把一个函数的输出作为下一个函数的输入（比如 <code>f(g(x))</code>）。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// h(x) = x + 1</span></span>
<span class="line"><span>// number -&gt; number</span></span>
<span class="line"><span>function h(x) {</span></span>
<span class="line"><span>  return x + 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// g(x) = x^2</span></span>
<span class="line"><span>// number -&gt; number</span></span>
<span class="line"><span>function g(x) {</span></span>
<span class="line"><span>  return x * x;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// f(x) = convert x to string</span></span>
<span class="line"><span>// number -&gt; string</span></span>
<span class="line"><span>function f(x) {</span></span>
<span class="line"><span>  return x.toString();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// y = (f ∘ g ∘ h)(1)</span></span>
<span class="line"><span>const y = f(g(h(1)));</span></span>
<span class="line"><span>console.log(y); // &#39;4&#39;</span></span></code></pre></div>`,6)),a("p",null,[e(p,{href:"http://ramdajs.com/"},{default:l(()=>[...s[28]||(s[28]=[n("Ramda",-1)])]),_:1}),s[30]||(s[30]=n(" 和 ",-1)),e(p,{href:"https://github.com/lodash/lodash/wiki/FP-Guide"},{default:l(()=>[...s[29]||(s[29]=[n("lodash",-1)])]),_:1}),s[31]||(s[31]=n(" 之类的库提供了更优雅的方式来组合函数。我们可以在更多的在数学意义上处理函数组合，而不是简单地将一个函数的返回值传递给下一个函数。我们可以创建一个由这些函数组成的单一复合函数(就是 ",-1)),s[32]||(s[32]=a("code",null,"(f ∘ g)(x)",-1)),s[33]||(s[33]=n(")。",-1))]),s[78]||(s[78]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// h(x) = x + 1</span></span>
<span class="line"><span>// number -&gt; number</span></span>
<span class="line"><span>function h(x) {</span></span>
<span class="line"><span>  return x + 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// g(x) = x^2</span></span>
<span class="line"><span>// number -&gt; number</span></span>
<span class="line"><span>function g(x) {</span></span>
<span class="line"><span>  return x * x;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// f(x) = convert x to string</span></span>
<span class="line"><span>// number -&gt; string</span></span>
<span class="line"><span>function f(x) {</span></span>
<span class="line"><span>  return x.toString();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// R = Ramda</span></span>
<span class="line"><span>// composite = (f ∘ g ∘ h)</span></span>
<span class="line"><span>const composite = R.compose(f, g, h);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Execute single function to get the result.</span></span>
<span class="line"><span>const y = composite(1);</span></span>
<span class="line"><span>console.log(y); // &#39;4&#39;</span></span></code></pre></div><p>好了，我们可以在 JavaScript 中组合函数了。接下来呢？好，如果你已经入门了函数式编程，理想中你的程序将只有函数的组合。代码里没有循环（<code>for</code>, <code>for...of</code>, <code>for...in</code>, <code>while</code>, <code>do</code>），基本没有。你可能觉得那是不可能的。并不是这样。我们下面的两个话题是：递归和高阶函数。</p><h3 id="递归" tabindex="-1">递归 <a class="header-anchor" href="#递归" aria-label="Permalink to “递归”">​</a></h3><p>假设你想实现一个计算数字的阶乘的函数。 让我们回顾一下数学中阶乘的定义：</p><p><code>n! = n * (n-1) * (n-2) * ... * 1</code>.</p><p><code>n!</code> 是从 <code>n</code> 到 <code>1</code> 的所有整数的乘积。我们可以编写一个循环轻松地计算出结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function iterativeFactorial(n) {</span></span>
<span class="line"><span>  let product = 1;</span></span>
<span class="line"><span>  for (let i = 1; i &lt;= n; i++) {</span></span>
<span class="line"><span>    product *= i;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return product;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意 <code>product</code> 和 <code>i</code> 都在循环中被反复重新赋值。这是解决这个问题的标准过程式方法。如何用函数式的方法解决这个问题呢？我们需要消除循环，确保没有变量被重新赋值。递归是函数式程序员的最有力的工具之一。递归需要我们将整体问题分解为类似整体问题的子问题。</p><p>计算阶乘是一个很好的例子，为了计算 <code>n!</code> 我们需要将 n 乘以所有比它小的正整数。它的意思就相当于：</p><p><code>n! = n * (n-1)!</code></p><p>啊哈！我们发现了一个解决 <code>(n-1)!</code> 的子问题，它类似于整个问题 <code>n!</code>。还有一个需要注意的地方就是基础条件。基础条件告诉我们何时停止递归。 如果我们没有基础条件，那么递归将永远持续。 实际上，如果有太多的递归调用，程序会抛出一个堆栈溢出错误。啊哈！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function recursiveFactorial(n) {</span></span>
<span class="line"><span>  // Base case -- stop the recursion</span></span>
<span class="line"><span>  if (n === 0) {</span></span>
<span class="line"><span>    return 1; // 0! is defined to be 1.</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return n * recursiveFactorial(n - 1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后我们来计算 <code>recursiveFactorial(20000)</code> 因为……，为什么不呢？当我们这样做的时候，我们得到了这个结果：</p><p><img src="https://opensource.com/sites/default/files/u128651/stack-overflow.png" alt="Stack overflow error" title="Stack overflow error"></p><p><em>堆栈溢出错误</em></p><p>这里发生了什么？我们得到一个堆栈溢出错误！这不是无穷的递归导致的。我们已经处理了基础条件(<code>n === 0</code> 的情况)。那是因为浏览器的堆栈大小是有限的，而我们的代码使用了越过了这个大小的堆栈。每次对 <code>recursiveFactorial</code> 的调用导致了新的帧被压入堆栈中，就像一个盒子压在另一个盒子上。每当 <code>recursiveFactorial</code> 被调用，一个新的盒子被放在最上面。下图展示了在计算 <code>recursiveFactorial(3)</code> 时堆栈的样子。注意在真实的堆栈中，堆栈顶部的帧将存储在执行完成后应该返回的内存地址，但是我选择用变量 <code>r</code> 来表示返回值，因为 JavaScript 开发者一般不需要考虑内存地址。</p><p><img src="https://opensource.com/sites/default/files/u128651/stack-frames.png" alt="The stack for recursively calculating 3! (three factorial)" title="The stack for recursively calculating 3! (three factorial)"></p><p><em>递归计算 3! 的堆栈（三次乘法）</em></p><p>你可能会想象当计算 <code>n = 20000</code> 时堆栈会更高。我们可以做些什么优化它吗？当然可以。作为 ES2015 (又名 ES6) 标准的一部分，有一个优化用来解决这个问题。它被称作<ruby>尾调用优化<rt>proper tail calls optimization</rt></ruby>（PTC）。当递归函数做的最后一件事是调用自己并返回结果的时候，它使得浏览器删除或者忽略堆栈帧。实际上，这个优化对于相互递归函数也是有效的，但是为了简单起见，我们还是来看单一递归函数。</p><p>你可能会注意到，在递归函数调用之后，还要进行一次额外的计算（<code>n * r</code>）。那意味着浏览器不能通过 PTC 来优化递归；然而，我们可以通过重写函数使最后一步变成递归调用以便优化。一个窍门是将中间结果（在这里是 <code>product</code>）作为参数传递给函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Optimized for tail call optimization.</span></span>
<span class="line"><span>function factorial(n, product = 1) {</span></span>
<span class="line"><span>  if (n === 0) {</span></span>
<span class="line"><span>    return product;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return factorial(n - 1, product * n)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>让我们来看看优化后的计算 <code>factorial(3)</code> 时的堆栈。如下图所示，堆栈不会增长到超过两层。原因是我们把必要的信息都传到了递归函数中（比如 <code>product</code>）。所以，在 <code>product</code> 被更新后，浏览器可以丢弃掉堆栈中原先的帧。你可以在图中看到每次最上面的帧下沉变成了底部的帧，原先底部的帧被丢弃，因为不再需要它了。</p><p><img src="https://opensource.com/sites/default/files/u128651/optimized-stack-frames.png" alt="The optimized stack for recursively calculating 3! (three factorial) using PTC" title="The optimized stack for recursively calculating 3! (three factorial) using PTC"></p><p><em>递归计算 3! 的堆栈（三次乘法）使用 PTC</em></p><p>现在选一个浏览器运行吧，假设你在使用 Safari，你会得到 <code>Infinity</code>（它是比在 JavaScript 中能表达的最大值更大的数）。但是我们没有得到堆栈溢出错误，那很不错！现在在其他的浏览器中呢怎么样呢？Safari 可能现在乃至将来是实现 PTC 的唯一一个浏览器。看看下面的兼容性表格：</p><p><img src="https://opensource.com/sites/default/files/u128651/ptc-compatibility.png" alt="PTC compatibility" title="PTC compatibility"></p><p><em>PTC 兼容性</em></p>`,27)),a("p",null,[s[36]||(s[36]=n("其他浏览器提出了一种被称作",-1)),a("ruby",null,[e(p,{href:"https://github.com/tc39/proposal-ptc-syntax#syntactic-tail-calls-stc"},{default:l(()=>[...s[34]||(s[34]=[n("语法级尾调用",-1)])]),_:1}),s[35]||(s[35]=a("rt",null,"syntactic tail calls",-1))]),s[37]||(s[37]=n("（STC）的竞争标准。“语法级”意味着你需要用新的语法来标识你想要执行尾递归优化的函数。即使浏览器还没有广泛支持，但是把你的递归函数写成支持尾递归优化的样子还是一个好主意。",-1))]),s[79]||(s[79]=i(`<h3 id="高阶函数" tabindex="-1">高阶函数 <a class="header-anchor" href="#高阶函数" aria-label="Permalink to “高阶函数”">​</a></h3><p>我们已经知道 JavaScript 将函数视作一等公民，可以把函数像其他值一样传递。所以，把一个函数传给另一个函数也很常见。我们也可以让函数返回一个函数。就是它！我们有高阶函数。你可能已经很熟悉几个在 <code>Array.prototype</code> 中的高阶函数。比如 <code>filter</code>、<code>map</code> 和 <code>reduce</code> 就在其中。对高阶函数的一种理解是：它是接受（一般会调用）一个回调函数参数的函数。让我们来看看一些内置的高阶函数的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const vehicles = [</span></span>
<span class="line"><span>  { make: &#39;Honda&#39;, model: &#39;CR-V&#39;, type: &#39;suv&#39;, price: 24045 },</span></span>
<span class="line"><span>  { make: &#39;Honda&#39;, model: &#39;Accord&#39;, type: &#39;sedan&#39;, price: 22455 },</span></span>
<span class="line"><span>  { make: &#39;Mazda&#39;, model: &#39;Mazda 6&#39;, type: &#39;sedan&#39;, price: 24195 },</span></span>
<span class="line"><span>  { make: &#39;Mazda&#39;, model: &#39;CX-9&#39;, type: &#39;suv&#39;, price: 31520 },</span></span>
<span class="line"><span>  { make: &#39;Toyota&#39;, model: &#39;4Runner&#39;, type: &#39;suv&#39;, price: 34210 },</span></span>
<span class="line"><span>  { make: &#39;Toyota&#39;, model: &#39;Sequoia&#39;, type: &#39;suv&#39;, price: 45560 },</span></span>
<span class="line"><span>  { make: &#39;Toyota&#39;, model: &#39;Tacoma&#39;, type: &#39;truck&#39;, price: 24320 },</span></span>
<span class="line"><span>  { make: &#39;Ford&#39;, model: &#39;F-150&#39;, type: &#39;truck&#39;, price: 27110 },</span></span>
<span class="line"><span>  { make: &#39;Ford&#39;, model: &#39;Fusion&#39;, type: &#39;sedan&#39;, price: 22120 },</span></span>
<span class="line"><span>  { make: &#39;Ford&#39;, model: &#39;Explorer&#39;, type: &#39;suv&#39;, price: 31660 }</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const averageSUVPrice = vehicles</span></span>
<span class="line"><span>  .filter(v =&gt; v.type === &#39;suv&#39;)</span></span>
<span class="line"><span>  .map(v =&gt; v.price)</span></span>
<span class="line"><span>  .reduce((sum, price, i, array) =&gt; sum + price / array.length, 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(averageSUVPrice); // 33399</span></span></code></pre></div><p>注意我们在一个数组对象上调用其方法，这是面向对象编程的特性。如果我们想要更函数式一些，我们可以用 Rmmda 或者 lodash/fp 提供的函数。注意如果我们使用 <code>R.compose</code> 的话，需要倒转函数的顺序，因为它从右向左依次调用函数（从底向上）；然而，如果我们想从左向右调用函数就像上面的例子，我们可以用 <code>R.pipe</code>。下面两个例子用了 Rmmda。注意 Rmmda 有一个 <code>mean</code> 函数用来代替 <code>reduce</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const vehicles = [</span></span>
<span class="line"><span>  { make: &#39;Honda&#39;, model: &#39;CR-V&#39;, type: &#39;suv&#39;, price: 24045 },</span></span>
<span class="line"><span>  { make: &#39;Honda&#39;, model: &#39;Accord&#39;, type: &#39;sedan&#39;, price: 22455 },</span></span>
<span class="line"><span>  { make: &#39;Mazda&#39;, model: &#39;Mazda 6&#39;, type: &#39;sedan&#39;, price: 24195 },</span></span>
<span class="line"><span>  { make: &#39;Mazda&#39;, model: &#39;CX-9&#39;, type: &#39;suv&#39;, price: 31520 },</span></span>
<span class="line"><span>  { make: &#39;Toyota&#39;, model: &#39;4Runner&#39;, type: &#39;suv&#39;, price: 34210 },</span></span>
<span class="line"><span>  { make: &#39;Toyota&#39;, model: &#39;Sequoia&#39;, type: &#39;suv&#39;, price: 45560 },</span></span>
<span class="line"><span>  { make: &#39;Toyota&#39;, model: &#39;Tacoma&#39;, type: &#39;truck&#39;, price: 24320 },</span></span>
<span class="line"><span>  { make: &#39;Ford&#39;, model: &#39;F-150&#39;, type: &#39;truck&#39;, price: 27110 },</span></span>
<span class="line"><span>  { make: &#39;Ford&#39;, model: &#39;Fusion&#39;, type: &#39;sedan&#39;, price: 22120 },</span></span>
<span class="line"><span>  { make: &#39;Ford&#39;, model: &#39;Explorer&#39;, type: &#39;suv&#39;, price: 31660 }</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Using \`pipe\` executes the functions from top-to-bottom. </span></span>
<span class="line"><span>const averageSUVPrice1 = R.pipe(</span></span>
<span class="line"><span>  R.filter(v =&gt; v.type === &#39;suv&#39;),</span></span>
<span class="line"><span>  R.map(v =&gt; v.price),</span></span>
<span class="line"><span>  R.mean</span></span>
<span class="line"><span>)(vehicles);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(averageSUVPrice1); // 33399</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Using \`compose\` executes the functions from bottom-to-top.</span></span>
<span class="line"><span>const averageSUVPrice2 = R.compose(</span></span>
<span class="line"><span>  R.mean,</span></span>
<span class="line"><span>  R.map(v =&gt; v.price),</span></span>
<span class="line"><span>  R.filter(v =&gt; v.type === &#39;suv&#39;)</span></span>
<span class="line"><span>)(vehicles);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(averageSUVPrice2); // 33399</span></span></code></pre></div><p>使用函数式方法的优点是清楚地分开了数据（<code>vehicles</code>）和逻辑（函数 <code>filter</code>，<code>map</code> 和 <code>reduce</code>）。面向对象的代码相比之下把数据和函数用以方法的对象的形式混合在了一起。</p><h3 id="柯里化" tabindex="-1">柯里化 <a class="header-anchor" href="#柯里化" aria-label="Permalink to “柯里化”">​</a></h3><p>不规范地说，<ruby>柯里化<rt>currying</rt></ruby>是把一个接受 <code>n</code> 个参数的函数变成 <code>n</code> 个每个接受单个参数的函数的过程。函数的 <code>arity</code> 是它接受参数的个数。接受一个参数的函数是 <code>unary</code>，两个的是 <code>binary</code>，三个的是 <code>ternary</code>，<code>n</code> 个的是 <code>n-ary</code>。那么，我们可以把柯里化定义成将一个 <code>n-ary</code> 函数转换成 <code>n</code> 个 <code>unary</code> 函数的过程。让我们通过简单的例子开始，一个计算两个向量点积的函数。回忆一下线性代数，两个向量 <code>[a, b, c]</code> 和 <code>[x, y, z]</code> 的点积是 <code>ax + by + cz</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function dot(vector1, vector2) {</span></span>
<span class="line"><span>  return vector1.reduce((sum, element, index) =&gt; sum += element * vector2[index], 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const v1 = [1, 3, -5];</span></span>
<span class="line"><span>const v2 = [4, -2, -1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(dot(v1, v2)); // 1(4) + 3(-2) + (-5)(-1) = 4 - 6 + 5 = 3</span></span></code></pre></div><p><code>dot</code> 函数是 binary，因为它接受两个参数；然而我们可以将它手动转换成两个 unary 函数，就像下面的例子。注意 <code>curriedDot</code> 是一个 unary 函数，它接受一个向量并返回另一个接受第二个向量的 unary 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function curriedDot(vector1) {</span></span>
<span class="line"><span>  return function(vector2) {</span></span>
<span class="line"><span>    return vector1.reduce((sum, element, index) =&gt; sum += element * vector2[index], 0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Taking the dot product of any vector with [1, 1, 1]</span></span>
<span class="line"><span>// is equivalent to summing up the elements of the other vector.</span></span>
<span class="line"><span>const sumElements = curriedDot([1, 1, 1]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(sumElements([1, 3, -5])); // -1</span></span>
<span class="line"><span>console.log(sumElements([4, -2, -1])); // 1</span></span></code></pre></div>`,11)),a("p",null,[s[40]||(s[40]=n("很幸运，我们不需要把每一个函数都手动转换成柯里化以后的形式。",-1)),e(p,{href:"http://ramdajs.com/docs/#curry"},{default:l(()=>[...s[38]||(s[38]=[n("Ramda",-1)])]),_:1}),s[41]||(s[41]=n(" 和 ",-1)),e(p,{href:"https://lodash.com/docs/4.17.4#curry"},{default:l(()=>[...s[39]||(s[39]=[n("lodash",-1)])]),_:1}),s[42]||(s[42]=n(" 等库可以为我们做这些工作。实际上，它们是柯里化的混合形式。你既可以每次传递一个参数，也可以像原来一样一次传递所有参数。",-1))]),s[80]||(s[80]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function dot(vector1, vector2) {</span></span>
<span class="line"><span>  return vector1.reduce((sum, element, index) =&gt; sum += element * vector2[index], 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const v1 = [1, 3, -5];</span></span>
<span class="line"><span>const v2 = [4, -2, -1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Use Ramda to do the currying for us!</span></span>
<span class="line"><span>const curriedDot = R.curry(dot);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sumElements = curriedDot([1, 1, 1]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(sumElements(v1)); // -1</span></span>
<span class="line"><span>console.log(sumElements(v2)); // 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// This works! You can still call the curried function with two arguments.</span></span>
<span class="line"><span>console.log(curriedDot(v1, v2)); // 3</span></span></code></pre></div><p>Ramda 和 lodash 都允许你“跳过”一些变量之后再指定它们。它们使用置位符来做这些工作。因为点积的计算可以交换两项。传入向量的顺序不影响结果。让我们换一个例子来阐述如何使用一个置位符。Ramda 使用双下划线作为其置位符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const giveMe3 = R.curry(function(item1, item2, item3) {</span></span>
<span class="line"><span>  return \`</span></span>
<span class="line"><span>    1: \${item1}</span></span>
<span class="line"><span>    2: \${item2}</span></span>
<span class="line"><span>    3: \${item3}</span></span>
<span class="line"><span>  \`;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const giveMe2 = giveMe3(R.__, R.__, &#39;French Hens&#39;);   // Specify the third argument.</span></span>
<span class="line"><span>const giveMe1 = giveMe2(&#39;Partridge in a Pear Tree&#39;);  // This will go in the first slot.</span></span>
<span class="line"><span>const result = giveMe1(&#39;Turtle Doves&#39;);               // Finally fill in the second argument.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(result);</span></span>
<span class="line"><span>// 1: Partridge in a Pear Tree</span></span>
<span class="line"><span>// 2: Turtle Doves</span></span>
<span class="line"><span>// 3: French Hens</span></span></code></pre></div><p>在我们结束探讨柯里化之前最后的议题是<ruby>偏函数应用<rt>partial application</rt></ruby>。偏函数应用和柯里化经常同时出场，尽管它们实际上是不同的概念。一个柯里化的函数还是柯里化的函数，即使没有给它任何参数。偏函数应用，另一方面是仅仅给一个函数传递部分参数而不是所有参数。柯里化是偏函数应用常用的方法之一，但是不是唯一的。</p>`,4)),a("p",null,[s[44]||(s[44]=n("JavaScript 拥有一个内置机制可以不依靠柯里化来做偏函数应用。那就是 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"},{default:l(()=>[...s[43]||(s[43]=[n("function.prototype.bind",-1)])]),_:1}),s[45]||(s[45]=n(" 方法。这个方法的一个特殊之处在于，它要求你将 ",-1)),s[46]||(s[46]=a("code",null,"this",-1)),s[47]||(s[47]=n(" 作为第一个参数传入。 如果你不进行面向对象编程，那么你可以通过传入 ",-1)),s[48]||(s[48]=a("code",null,"null",-1)),s[49]||(s[49]=n(" 来忽略 ",-1)),s[50]||(s[50]=a("code",null,"this",-1)),s[51]||(s[51]=n("。",-1))]),s[81]||(s[81]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1function giveMe3(item1, item2, item3) {</span></span>
<span class="line"><span>  return \`</span></span>
<span class="line"><span>    1: \${item1}</span></span>
<span class="line"><span>    2: \${item2}</span></span>
<span class="line"><span>    3: \${item3}</span></span>
<span class="line"><span>  \`;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const giveMe2 = giveMe3.bind(null, &#39;rock&#39;);</span></span>
<span class="line"><span>const giveMe1 = giveMe2.bind(null, &#39;paper&#39;);</span></span>
<span class="line"><span>const result = giveMe1(&#39;scissors&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(result);</span></span>
<span class="line"><span>// 1: rock</span></span>
<span class="line"><span>// 2: paper</span></span>
<span class="line"><span>// 3: scissors</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>我希望你享受探索 JavaScript 中函数式编程的过程。对一些人来说，它可能是一个全新的编程范式，但我希望你能尝试它。你会发现你的程序更易于阅读和调试。不变性还将允许你优化 Angular 和 React 的性能。</p>`,3)),a("p",null,[a("em",null,[s[54]||(s[54]=n("这篇文章基于 Matt 在 OpenWest 的演讲 ",-1)),e(p,{href:"https://www.openwest.org/schedule/#talk-5"},{default:l(()=>[...s[52]||(s[52]=[n("JavaScript the Good-er Parts",-1)])]),_:1}),s[55]||(s[55]=n(". ",-1)),e(p,{href:"https://www.openwest.org/"},{default:l(()=>[...s[53]||(s[53]=[n("OpenWest",-1)])]),_:1}),s[56]||(s[56]=n()),s[57]||(s[57]=a("s",null,"将",-1)),s[58]||(s[58]=n("在 6/12-15 ,2017 在 Salt Lake City, Utah 举行。",-1))])]),s[82]||(s[82]=a("hr",null,null,-1)),s[83]||(s[83]=a("p",null,"作者简介：",-1)),s[84]||(s[84]=a("p",null,"Matt Banz - Matt 于 2008 年五月在犹他大学获得了数学学位毕业。一个月后他得到了一份 web 开发者的工作，他从那时起就爱上了它！在 2013 年，他在北卡罗莱纳州立大学获得了计算机科学硕士学位。他在 LDS 商学院和戴维斯学区社区教育计划教授 Web 课程。他现在是就职于 Motorola Solutions 公司的高级前端开发者。",-1)),s[85]||(s[85]=a("hr",null,null,-1)),a("p",null,[s[60]||(s[60]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/17/6/functional-javascript"},{default:l(()=>[...s[59]||(s[59]=[n("https://opensource.com/article/17/6/functional-javascript",-1)])]),_:1})]),a("p",null,[s[64]||(s[64]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/battmanz"},{default:l(()=>[...s[61]||(s[61]=[n("Matt Banz",-1)])]),_:1}),s[65]||(s[65]=n(" 译者：",-1)),e(p,{href:"https://github.com/trnhoe"},{default:l(()=>[...s[62]||(s[62]=[n("trnhoe",-1)])]),_:1}),s[66]||(s[66]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[63]||(s[63]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[69]||(s[69]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[67]||(s[67]=[n("LCTT",-1)])]),_:1}),s[70]||(s[70]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[68]||(s[68]=[n("Linux中国",-1)])]),_:1}),s[71]||(s[71]=n(" 荣誉推出",-1))])])}const C=t(d,[["render",u]]);export{y as __pageData,C as default};
