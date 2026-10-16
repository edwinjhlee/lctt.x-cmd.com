import{_ as t,a0 as o,w as c,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"JavaScript 函數式編程介紹 | LCTT x X-CMD","titleTemplate":false,"description":"JavaScript 函數式編程介紹 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JavaScript 函數式編程介紹 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JavaScript 函數式編程介紹 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170627 An introduction to functional programming in JavaScript","title":"JavaScript 函數式編程介紹","tag":"201710","desc":""},"relativePath":"201710/20170627 An introduction to functional programming in JavaScript.md","filePath":"[post].md"}'),d={name:"201710/20170627 An introduction to functional programming in JavaScript.md"};function u(g,s,h,m,f,b){const p=o("Link");return c(),r("div",null,[s[72]||(s[72]=a("h1",{id:"javascript-函數式編程介紹",tabindex:"-1"},[n("JavaScript 函數式編程介紹 "),a("a",{class:"header-anchor",href:"#javascript-函數式編程介紹","aria-label":"Permalink to “JavaScript 函數式編程介紹”"},"​")],-1)),s[73]||(s[73]=a("blockquote",null,[a("p",null,"探索函數式編程，通過它讓你的程序更具有可讀性和易於調試")],-1)),s[74]||(s[74]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bus-rocket.png?itok=xQqKRMla",alt:"An introduction to functional programming in JavaScript",title:"An introduction to functional programming in JavaScript"})],-1)),a("blockquote",null,[a("p",null,[s[1]||(s[1]=n("Image credits : Steve Jurvetson via ",-1)),e(p,{href:"https://www.flickr.com/photos/jurvetson/882193732/"},{default:l(()=>[...s[0]||(s[0]=[n("Flickr",-1)])]),_:1}),s[2]||(s[2]=n(" (CC-BY-2.0)",-1))])]),a("p",null,[s[4]||(s[4]=n("當 Brendan Eich 在 1995 年創造 JavaScript 時，他原本打算",-1)),e(p,{href:"https://brendaneich.com/2008/04/popularity/"},{default:l(()=>[...s[3]||(s[3]=[n("將 Scheme 移植到瀏覽器裏",-1)])]),_:1}),s[5]||(s[5]=n(" 。Scheme 作為 Lisp 的方言，是一種函數式編程語言。而當 Eich 被告知新的語言應該是一種可以與 Java 相比的腳本語言後，他最終確立了一種擁有 C 風格語法的語言（也和 Java 一樣），但將函數視作一等公民。而 Java 直到版本 8 才從技術上將函數視為一等公民，雖然你可以用匿名類來模擬它。這個特性允許 JavaScript 通過函數式範式編程。",-1))]),a("p",null,[s[8]||(s[8]=n("JavaScript 是一個多範式語言，允許你自由地混合和使用面向對象式、過程式和函數式的編程範式。最近，函數式編程越來越火熱。在諸如 ",-1)),e(p,{href:"https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html"},{default:l(()=>[...s[6]||(s[6]=[n("Angular",-1)])]),_:1}),s[9]||(s[9]=n(" 和 ",-1)),e(p,{href:"https://facebook.github.io/react/docs/optimizing-performance.html#the-power-of-not-mutating-data"},{default:l(()=>[...s[7]||(s[7]=[n("React",-1)])]),_:1}),s[10]||(s[10]=n(" 這樣的框架中，通過使用不可變數據結構可以切實提高性能。不可變是函數式編程的核心原則，它以及純函數使得編寫和調試程序變得更加容易。使用函數來代替程序的循環可以提高程序的可讀性並使它更加優雅。總之，函數式編程擁有很多優點。",-1))]),s[75]||(s[75]=i(`<h3 id="什麼不是函數式編程" tabindex="-1">什麼不是函數式編程 <a class="header-anchor" href="#什麼不是函數式編程" aria-label="Permalink to “什麼不是函數式編程”">​</a></h3><p>在討論什麼是函數式編程前，讓我們先排除那些不屬於函數式編程的東西。實際上它們是你需要丟棄的語言組件（再見，老朋友）：</p><ul><li>循環： <ul><li><code>while</code></li><li><code>do...while</code></li><li><code>for</code></li><li><code>for...of</code></li><li><code>for...in</code></li></ul></li><li>用 <code>var</code> 或者 <code>let</code> 來聲明變量</li><li>沒有返回值的函數</li><li>改變對象的屬性 (比如: <code>o.x = 5;</code>)</li><li>改變數組本身的方法： <ul><li><code>copyWithin</code></li><li><code>fill</code></li><li><code>pop</code></li><li><code>push</code></li><li><code>reverse</code></li><li><code>shift</code></li><li><code>sort</code></li><li><code>splice</code></li><li><code>unshift</code></li></ul></li><li>改變映射本身的方法： <ul><li><code>clear</code></li><li><code>delete</code></li><li><code>set</code></li></ul></li><li>改變集合本身的方法： <ul><li><code>add</code></li><li><code>clear</code></li><li><code>delete</code></li></ul></li></ul><p>脱離這些特性應該如何編寫程序呢？這是我們將在後面探索的問題。</p><h3 id="純函數" tabindex="-1">純函數 <a class="header-anchor" href="#純函數" aria-label="Permalink to “純函數”">​</a></h3><p>你的程序中包含函數不一定意味着你正在進行函數式編程。函數式範式將<ruby>純函數<rt>pure function</rt></ruby>和<ruby>非純函數<rt>impure function</rt></ruby>區分開。鼓勵你編寫純函數。純函數必須滿足下面的兩個屬性：</p><ul><li>引用透明：函數在傳入相同的參數後永遠返回相同的返回值。這意味着該函數不依賴於任何可變狀態。</li><li>無副作用：函數不能導致任何副作用。副作用可能包括 I/O（比如向終端或者日誌文件寫入），改變一個不可變的對象，對變量重新賦值等等。</li></ul><p>我們來看一些例子。首先，<code>multiply</code> 就是一個純函數的例子，它在傳入相同的參數後永遠返回相同的返回值，並且不會導致副作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function multiply(a, b) {</span></span>
<span class="line"><span>  return a * b;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面是非純函數的例子。<code>canRide</code> 函數依賴捕獲的 <code>heightRequirement</code> 變量。被捕獲的變量不一定導致一個函數是非純函數，除非它是一個可變的變量（或者可以被重新賦值）。這種情況下使用 <code>let</code> 來聲明這個變量，意味着可以對它重新賦值。<code>multiply</code> 函數是非純函數，因為它會導致在 console 上輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let heightRequirement = 46;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>下面的列表包含着 JavaScript 內置的非純函數。你可以指出它們不滿足兩個屬性中的哪個嗎？</p><ul><li><code>console.log</code></li><li><code>element.addEventListener</code></li><li><code>Math.random</code></li><li><code>Date.now</code></li><li><code>$.ajax</code> (這裏 <code>$</code> 代表你使用的 Ajax 庫)</li></ul><p>理想的程序中所有的函數都是純函數，但是從上面的函數列表可以看出，任何有意義的程序都將包含非純函數。大多時候我們需要進行 AJAX 調用，檢查當前日期或者獲取一個隨機數。一個好的經驗法則是遵循 80/20 規則：函數中有 80％ 應該是純函數，剩下的 20％ 的必要性將不可避免地是非純函數。</p><p>使用純函數有幾個優點：</p><ul><li>它們很容易導出和調試，因為它們不依賴於可變的狀態。</li><li>返回值可以被緩存或者“記憶”來避免以後重複計算。</li><li>它們很容易測試，因為沒有需要模擬（mock）的依賴（比如日誌，AJAX，資料庫等等）。</li></ul><p>你編寫或者使用的函數返回空（換句話説它沒有返回值），那代表它是非純函數。</p><h3 id="不變性" tabindex="-1">不變性 <a class="header-anchor" href="#不變性" aria-label="Permalink to “不變性”">​</a></h3><p>讓我們回到捕獲變量的概念上。來看看 <code>canRide</code> 函數。我們認為它是一個非純函數，因為 <code>heightRequirement</code> 變量可以被重新賦值。下面是一個構造出來的例子來説明如何用不可預測的值來對它重新賦值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let heightRequirement = 46;</span></span>
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
<span class="line"><span>setInterval(() =&gt; console.log(canRide(mySonsHeight)), 500);</span></span></code></pre></div><p>我要再次強調被捕獲的變量不一定會使函數成為非純函數。我們可以通過只是簡單地改變 <code>heightRequirement</code> 的聲明方式來使 <code>canRide</code> 函數成為純函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const heightRequirement = 46;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function canRide(height) {</span></span>
<span class="line"><span>  return height &gt;= heightRequirement;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過用 <code>const</code> 來聲明變量意味着它不能被再次賦值。如果嘗試對它重新賦值，運行時引擎將拋出錯誤；那麼，如果用對象來代替數字來存儲所有的“常量”怎麼樣？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const constants = {</span></span>
<span class="line"><span>  heightRequirement: 46,</span></span>
<span class="line"><span>  // ... other constants go here</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function canRide(height) {</span></span>
<span class="line"><span>  return height &gt;= constants.heightRequirement;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們用了 <code>const</code> ，所以這個變量不能被重新賦值，但是還有一個問題：這個對象可以被改變。下面的代碼展示了，為了真正使其不可變，你不僅需要防止它被重新賦值，你也需要不可變的數據結構。JavaScript 語言提供了 <code>Object.freeze</code> 方法來阻止對象被改變。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 1: 對象的屬性是可變的，並且變量可以被再次賦值。</span></span>
<span class="line"><span>let o1 = { foo: &#39;bar&#39; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 改變對象的屬性</span></span>
<span class="line"><span>o1.foo = &#39;something different&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 對變量再次賦值</span></span>
<span class="line"><span>o1 = { message: &quot;I&#39;m a completely new object&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 2: 對象的屬性還是可變的，但是變量不能被再次賦值。</span></span>
<span class="line"><span>const o2 = { foo: &#39;baz&#39; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 仍然能改變對象</span></span>
<span class="line"><span>o2.foo = &#39;Something different, yet again&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能對變量再次賦值</span></span>
<span class="line"><span>// o2 = { message: &#39;I will cause an error if you uncomment me&#39; };</span><span> // Error!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 3: 對象的屬性是不可變的，但是變量可以被再次賦值。</span></span>
<span class="line"><span>let o3 = Object.freeze({ foo: &quot;Can&#39;t mutate me&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能改變對象的屬性</span></span>
<span class="line"><span>// o3.foo = &#39;Come on, uncomment me. I dare ya!&#39;;</span><span> // Error!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 還是可以對變量再次賦值</span></span>
<span class="line"><span>o3 = { message: &quot;I&#39;m some other object, and I&#39;m even mutable -- so take that!&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CASE 4: 對象的屬性是不可變的，並且變量不能被再次賦值。這是我們想要的！！！！！！！！</span></span>
<span class="line"><span>const o4 = Object.freeze({ foo: &#39;never going to change me&#39; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能改變對象的屬性</span></span>
<span class="line"><span>// o4.foo = &#39;talk to the hand&#39;</span><span> // Error!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不能對變量再次賦值</span></span>
<span class="line"><span>// o4 = { message: &quot;ain&#39;t gonna happen, sorry&quot; };</span><span> // Error</span></span></code></pre></div><p>不變性適用於所有的數據結構，包括數組、映射和集合。它意味着不能調用例如 <code>Array.prototype.push</code> 等會導致本身改變的方法，因為它會改變已經存在的數組。可以通過創建一個含有原來元素和新加元素的新數組，而不是將新元素加入一個已經存在的數組。其實所有會導致數組本身被修改的方法都可以通過一個返回修改好的新數組的函數代替。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;use strict&#39;;</span></span>
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
<span class="line"><span>// 留給讀者的練習:</span></span>
<span class="line"><span>// copyWithin</span></span>
<span class="line"><span>// fill</span></span>
<span class="line"><span>// splice</span></span></code></pre></div>`,28)),a("p",null,[e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},{default:l(()=>[...s[11]||(s[11]=[n("映射",-1)])]),_:1}),s[13]||(s[13]=n(" 和 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},{default:l(()=>[...s[12]||(s[12]=[n("集合",-1)])]),_:1}),s[14]||(s[14]=n(" 也很相似。可以通過返回一個新的修改好的映射或者集合來代替使用會修改其本身的函數。",-1))]),s[76]||(s[76]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const map = new Map([</span></span>
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
<span class="line"><span>const set4 = new Set();</span></span></code></pre></div><p>我想提一句如果你在使用 TypeScript（我非常喜歡 TypeScript），你可以用 <code>Readonly&lt;T&gt;</code>、<code>ReadonlyArray&lt;T&gt;</code>、<code>ReadonlyMap&lt;K, V&gt;</code> 和 <code>ReadonlySet&lt;T&gt;</code> 接口來在編譯期檢查你是否嘗試更改這些對象，有則拋出編譯錯誤。如果在對一個對象字面量或者數組調用 <code>Object.freeze</code>，編譯器會自動推斷它是隻讀的。由於映射和集合在其內部表達，所以在這些數據結構上調用 <code>Object.freeze</code> 不起作用。但是你可以輕鬆地告訴編譯器它們是隻讀的變量。</p><p><img src="https://opensource.com/sites/default/files/u128651/typescript-readonly.png" alt="TypeScript Readonly Interfaces" title="TypeScript Readonly Interfaces"></p><p><em>TypeScript 只讀接口</em></p>`,5)),a("p",null,[s[21]||(s[21]=n("好，所以我們可以通過創建新的對象來代替修改原來的對象，但是這樣不會導致性能損失嗎？當然會。確保在你自己的應用中做了性能測試。如果你需要提高性能，可以考慮使用 ",-1)),e(p,{href:"https://facebook.github.io/immutable-js/"},{default:l(()=>[...s[15]||(s[15]=[n("Immutable.js",-1)])]),_:1}),s[22]||(s[22]=n("。Immutable.js 用",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Persistent_data_structure"},{default:l(()=>[...s[16]||(s[16]=[n("持久的數據結構",-1)])]),_:1}),s[23]||(s[23]=n(" 實現了",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/List"},{default:l(()=>[...s[17]||(s[17]=[n("鏈表",-1)])]),_:1}),s[24]||(s[24]=n("、",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/Stack"},{default:l(()=>[...s[18]||(s[18]=[n("堆棧",-1)])]),_:1}),s[25]||(s[25]=n("、",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/Map"},{default:l(()=>[...s[19]||(s[19]=[n("映射",-1)])]),_:1}),s[26]||(s[26]=n("、",-1)),e(p,{href:"https://facebook.github.io/immutable-js/docs/#/Set"},{default:l(()=>[...s[20]||(s[20]=[n("集合",-1)])]),_:1}),s[27]||(s[27]=n("和其他數據結構。使用瞭如同 Clojure 和 Scala 這樣的函數式語言中相同的技術。",-1))]),s[77]||(s[77]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Use in place of \`[]\`.</span></span>
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
<span class="line"><span>console.log([...set2]); // [1, 2, 3, 4, 5]</span></span></code></pre></div><h3 id="函數組合" tabindex="-1">函數組合 <a class="header-anchor" href="#函數組合" aria-label="Permalink to “函數組合”">​</a></h3><p>記不記得在中學時我們學過一些像 <code>(f ∘ g)(x)</code> 的東西？你那時可能想，“我什麼時候會用到這些？”，好了，現在就用到了。你準備好了嗎？<code>f ∘ g</code>讀作 “函數 f 和函數 g 組合”。對它的理解有兩種等價的方式，如等式所示： <code>(f ∘ g)(x) = f(g(x))</code>。你可以認為 <code>f ∘ g</code> 是一個單獨的函數，或者視作將調用函數 <code>g</code> 的結果作為參數傳給函數 <code>f</code>。注意這些函數是從右向左依次調用的，先執行 <code>g</code>，接下來執行 <code>f</code>。</p><p>關於函數組合的幾個要點:</p><ol><li>我們可以組合任意數量的函數（不僅限於 2 個）。</li><li>組合函數的一個方式是簡單地把一個函數的輸出作為下一個函數的輸入（比如 <code>f(g(x))</code>）。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// h(x) = x + 1</span></span>
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
<span class="line"><span>console.log(y); // &#39;4&#39;</span></span></code></pre></div>`,6)),a("p",null,[e(p,{href:"http://ramdajs.com/"},{default:l(()=>[...s[28]||(s[28]=[n("Ramda",-1)])]),_:1}),s[30]||(s[30]=n(" 和 ",-1)),e(p,{href:"https://github.com/lodash/lodash/wiki/FP-Guide"},{default:l(()=>[...s[29]||(s[29]=[n("lodash",-1)])]),_:1}),s[31]||(s[31]=n(" 之類的庫提供了更優雅的方式來組合函數。我們可以在更多的在數學意義上處理函數組合，而不是簡單地將一個函數的返回值傳遞給下一個函數。我們可以創建一個由這些函數組成的單一複合函數(就是 ",-1)),s[32]||(s[32]=a("code",null,"(f ∘ g)(x)",-1)),s[33]||(s[33]=n(")。",-1))]),s[78]||(s[78]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// h(x) = x + 1</span></span>
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
<span class="line"><span>console.log(y); // &#39;4&#39;</span></span></code></pre></div><p>好了，我們可以在 JavaScript 中組合函數了。接下來呢？好，如果你已經入門了函數式編程，理想中你的程序將只有函數的組合。代碼裏沒有循環（<code>for</code>, <code>for...of</code>, <code>for...in</code>, <code>while</code>, <code>do</code>），基本沒有。你可能覺得那是不可能的。並不是這樣。我們下面的兩個話題是：遞歸和高階函數。</p><h3 id="遞歸" tabindex="-1">遞歸 <a class="header-anchor" href="#遞歸" aria-label="Permalink to “遞歸”">​</a></h3><p>假設你想實現一個計算數字的階乘的函數。 讓我們回顧一下數學中階乘的定義：</p><p><code>n! = n * (n-1) * (n-2) * ... * 1</code>.</p><p><code>n!</code> 是從 <code>n</code> 到 <code>1</code> 的所有整數的乘積。我們可以編寫一個循環輕鬆地計算出結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function iterativeFactorial(n) {</span></span>
<span class="line"><span>  let product = 1;</span></span>
<span class="line"><span>  for (let i = 1; i &lt;= n; i++) {</span></span>
<span class="line"><span>    product *= i;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return product;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意 <code>product</code> 和 <code>i</code> 都在循環中被反覆重新賦值。這是解決這個問題的標準過程式方法。如何用函數式的方法解決這個問題呢？我們需要消除循環，確保沒有變量被重新賦值。遞歸是函數式程序員的最有力的工具之一。遞歸需要我們將整體問題分解為類似整體問題的子問題。</p><p>計算階乘是一個很好的例子，為了計算 <code>n!</code> 我們需要將 n 乘以所有比它小的正整數。它的意思就相當於：</p><p><code>n! = n * (n-1)!</code></p><p>啊哈！我們發現了一個解決 <code>(n-1)!</code> 的子問題，它類似於整個問題 <code>n!</code>。還有一個需要注意的地方就是基礎條件。基礎條件告訴我們何時停止遞歸。 如果我們沒有基礎條件，那麼遞歸將永遠持續。 實際上，如果有太多的遞歸調用，程序會拋出一個堆棧溢出錯誤。啊哈！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function recursiveFactorial(n) {</span></span>
<span class="line"><span>  // Base case -- stop the recursion</span></span>
<span class="line"><span>  if (n === 0) {</span></span>
<span class="line"><span>    return 1; // 0! is defined to be 1.</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return n * recursiveFactorial(n - 1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然後我們來計算 <code>recursiveFactorial(20000)</code> 因為……，為什麼不呢？當我們這樣做的時候，我們得到了這個結果：</p><p><img src="https://opensource.com/sites/default/files/u128651/stack-overflow.png" alt="Stack overflow error" title="Stack overflow error"></p><p><em>堆棧溢出錯誤</em></p><p>這裏發生了什麼？我們得到一個堆棧溢出錯誤！這不是無窮的遞歸導致的。我們已經處理了基礎條件(<code>n === 0</code> 的情況)。那是因為瀏覽器的堆棧大小是有限的，而我們的代碼使用了越過了這個大小的堆棧。每次對 <code>recursiveFactorial</code> 的調用導致了新的幀被壓入堆棧中，就像一個盒子壓在另一個盒子上。每當 <code>recursiveFactorial</code> 被調用，一個新的盒子被放在最上面。下圖展示了在計算 <code>recursiveFactorial(3)</code> 時堆棧的樣子。注意在真實的堆棧中，堆棧頂部的幀將存儲在執行完成後應該返回的內存地址，但是我選擇用變量 <code>r</code> 來表示返回值，因為 JavaScript 開發者一般不需要考慮內存地址。</p><p><img src="https://opensource.com/sites/default/files/u128651/stack-frames.png" alt="The stack for recursively calculating 3! (three factorial)" title="The stack for recursively calculating 3! (three factorial)"></p><p><em>遞歸計算 3! 的堆棧（三次乘法）</em></p><p>你可能會想像當計算 <code>n = 20000</code> 時堆棧會更高。我們可以做些什麼優化它嗎？當然可以。作為 ES2015 (又名 ES6) 標準的一部分，有一個優化用來解決這個問題。它被稱作<ruby>尾調用優化<rt>proper tail calls optimization</rt></ruby>（PTC）。當遞歸函數做的最後一件事是調用自己並返回結果的時候，它使得瀏覽器刪除或者忽略堆棧幀。實際上，這個優化對於相互遞歸函數也是有效的，但是為了簡單起見，我們還是來看單一遞歸函數。</p><p>你可能會注意到，在遞歸函數調用之後，還要進行一次額外的計算（<code>n * r</code>）。那意味着瀏覽器不能通過 PTC 來優化遞歸；然而，我們可以通過重寫函數使最後一步變成遞歸調用以便優化。一個竅門是將中間結果（在這裏是 <code>product</code>）作為參數傳遞給函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Optimized for tail call optimization.</span></span>
<span class="line"><span>function factorial(n, product = 1) {</span></span>
<span class="line"><span>  if (n === 0) {</span></span>
<span class="line"><span>    return product;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return factorial(n - 1, product * n)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>讓我們來看看優化後的計算 <code>factorial(3)</code> 時的堆棧。如下圖所示，堆棧不會增長到超過兩層。原因是我們把必要的信息都傳到了遞歸函數中（比如 <code>product</code>）。所以，在 <code>product</code> 被更新後，瀏覽器可以丟棄掉堆棧中原先的幀。你可以在圖中看到每次最上面的幀下沉變成了底部的幀，原先底部的幀被丟棄，因為不再需要它了。</p><p><img src="https://opensource.com/sites/default/files/u128651/optimized-stack-frames.png" alt="The optimized stack for recursively calculating 3! (three factorial) using PTC" title="The optimized stack for recursively calculating 3! (three factorial) using PTC"></p><p><em>遞歸計算 3! 的堆棧（三次乘法）使用 PTC</em></p><p>現在選一個瀏覽器運行吧，假設你在使用 Safari，你會得到 <code>Infinity</code>（它是比在 JavaScript 中能表達的最大值更大的數）。但是我們沒有得到堆棧溢出錯誤，那很不錯！現在在其他的瀏覽器中呢怎麼樣呢？Safari 可能現在乃至將來是實現 PTC 的唯一一個瀏覽器。看看下面的兼容性表格：</p><p><img src="https://opensource.com/sites/default/files/u128651/ptc-compatibility.png" alt="PTC compatibility" title="PTC compatibility"></p><p><em>PTC 兼容性</em></p>`,27)),a("p",null,[s[36]||(s[36]=n("其他瀏覽器提出了一種被稱作",-1)),a("ruby",null,[e(p,{href:"https://github.com/tc39/proposal-ptc-syntax#syntactic-tail-calls-stc"},{default:l(()=>[...s[34]||(s[34]=[n("語法級尾調用",-1)])]),_:1}),s[35]||(s[35]=a("rt",null,"syntactic tail calls",-1))]),s[37]||(s[37]=n("（STC）的競爭標準。“語法級”意味着你需要用新的語法來標識你想要執行尾遞歸優化的函數。即使瀏覽器還沒有廣泛支持，但是把你的遞歸函數寫成支持尾遞歸優化的樣子還是一個好主意。",-1))]),s[79]||(s[79]=i(`<h3 id="高階函數" tabindex="-1">高階函數 <a class="header-anchor" href="#高階函數" aria-label="Permalink to “高階函數”">​</a></h3><p>我們已經知道 JavaScript 將函數視作一等公民，可以把函數像其他值一樣傳遞。所以，把一個函數傳給另一個函數也很常見。我們也可以讓函數返回一個函數。就是它！我們有高階函數。你可能已經很熟悉幾個在 <code>Array.prototype</code> 中的高階函數。比如 <code>filter</code>、<code>map</code> 和 <code>reduce</code> 就在其中。對高階函數的一種理解是：它是接受（一般會調用）一個回調函數參數的函數。讓我們來看看一些內置的高階函數的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const vehicles = [</span></span>
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
<span class="line"><span>console.log(averageSUVPrice); // 33399</span></span></code></pre></div><p>注意我們在一個數組對象上調用其方法，這是面向對象編程的特性。如果我們想要更函數式一些，我們可以用 Rmmda 或者 lodash/fp 提供的函數。注意如果我們使用 <code>R.compose</code> 的話，需要倒轉函數的順序，因為它從右向左依次調用函數（從底向上）；然而，如果我們想從左向右調用函數就像上面的例子，我們可以用 <code>R.pipe</code>。下面兩個例子用了 Rmmda。注意 Rmmda 有一個 <code>mean</code> 函數用來代替 <code>reduce</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const vehicles = [</span></span>
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
<span class="line"><span>console.log(averageSUVPrice2); // 33399</span></span></code></pre></div><p>使用函數式方法的優點是清楚地分開了數據（<code>vehicles</code>）和邏輯（函數 <code>filter</code>，<code>map</code> 和 <code>reduce</code>）。面向對象的代碼相比之下把數據和函數用以方法的對象的形式混合在了一起。</p><h3 id="柯里化" tabindex="-1">柯里化 <a class="header-anchor" href="#柯里化" aria-label="Permalink to “柯里化”">​</a></h3><p>不規範地説，<ruby>柯里化<rt>currying</rt></ruby>是把一個接受 <code>n</code> 個參數的函數變成 <code>n</code> 個每個接受單個參數的函數的過程。函數的 <code>arity</code> 是它接受參數的個數。接受一個參數的函數是 <code>unary</code>，兩個的是 <code>binary</code>，三個的是 <code>ternary</code>，<code>n</code> 個的是 <code>n-ary</code>。那麼，我們可以把柯里化定義成將一個 <code>n-ary</code> 函數轉換成 <code>n</code> 個 <code>unary</code> 函數的過程。讓我們通過簡單的例子開始，一個計算兩個向量點積的函數。回憶一下線性代數，兩個向量 <code>[a, b, c]</code> 和 <code>[x, y, z]</code> 的點積是 <code>ax + by + cz</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function dot(vector1, vector2) {</span></span>
<span class="line"><span>  return vector1.reduce((sum, element, index) =&gt; sum += element * vector2[index], 0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const v1 = [1, 3, -5];</span></span>
<span class="line"><span>const v2 = [4, -2, -1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(dot(v1, v2)); // 1(4) + 3(-2) + (-5)(-1) = 4 - 6 + 5 = 3</span></span></code></pre></div><p><code>dot</code> 函數是 binary，因為它接受兩個參數；然而我們可以將它手動轉換成兩個 unary 函數，就像下面的例子。注意 <code>curriedDot</code> 是一個 unary 函數，它接受一個向量並返回另一個接受第二個向量的 unary 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function curriedDot(vector1) {</span></span>
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
<span class="line"><span>console.log(sumElements([4, -2, -1])); // 1</span></span></code></pre></div>`,11)),a("p",null,[s[40]||(s[40]=n("很幸運，我們不需要把每一個函數都手動轉換成柯里化以後的形式。",-1)),e(p,{href:"http://ramdajs.com/docs/#curry"},{default:l(()=>[...s[38]||(s[38]=[n("Ramda",-1)])]),_:1}),s[41]||(s[41]=n(" 和 ",-1)),e(p,{href:"https://lodash.com/docs/4.17.4#curry"},{default:l(()=>[...s[39]||(s[39]=[n("lodash",-1)])]),_:1}),s[42]||(s[42]=n(" 等庫可以為我們做這些工作。實際上，它們是柯里化的混合形式。你既可以每次傳遞一個參數，也可以像原來一樣一次傳遞所有參數。",-1))]),s[80]||(s[80]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function dot(vector1, vector2) {</span></span>
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
<span class="line"><span>console.log(curriedDot(v1, v2)); // 3</span></span></code></pre></div><p>Ramda 和 lodash 都允許你“跳過”一些變量之後再指定它們。它們使用置位符來做這些工作。因為點積的計算可以交換兩項。傳入向量的順序不影響結果。讓我們換一個例子來闡述如何使用一個置位符。Ramda 使用雙下劃線作為其置位符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const giveMe3 = R.curry(function(item1, item2, item3) {</span></span>
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
<span class="line"><span>// 3: French Hens</span></span></code></pre></div><p>在我們結束探討柯里化之前最後的議題是<ruby>偏函數應用<rt>partial application</rt></ruby>。偏函數應用和柯里化經常同時出場，儘管它們實際上是不同的概念。一個柯里化的函數還是柯里化的函數，即使沒有給它任何參數。偏函數應用，另一方面是僅僅給一個函數傳遞部分參數而不是所有參數。柯里化是偏函數應用常用的方法之一，但是不是唯一的。</p>`,4)),a("p",null,[s[44]||(s[44]=n("JavaScript 擁有一個內置機制可以不依靠柯里化來做偏函數應用。那就是 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"},{default:l(()=>[...s[43]||(s[43]=[n("function.prototype.bind",-1)])]),_:1}),s[45]||(s[45]=n(" 方法。這個方法的一個特殊之處在於，它要求你將 ",-1)),s[46]||(s[46]=a("code",null,"this",-1)),s[47]||(s[47]=n(" 作為第一個參數傳入。 如果你不進行面向對象編程，那麼你可以通過傳入 ",-1)),s[48]||(s[48]=a("code",null,"null",-1)),s[49]||(s[49]=n(" 來忽略 ",-1)),s[50]||(s[50]=a("code",null,"this",-1)),s[51]||(s[51]=n("。",-1))]),s[81]||(s[81]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1function giveMe3(item1, item2, item3) {</span></span>
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
<span class="line"><span>// 3: scissors</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>我希望你享受探索 JavaScript 中函數式編程的過程。對一些人來説，它可能是一個全新的編程範式，但我希望你能嘗試它。你會發現你的程序更易於閲讀和調試。不變性還將允許你優化 Angular 和 React 的性能。</p>`,3)),a("p",null,[a("em",null,[s[54]||(s[54]=n("這篇文章基於 Matt 在 OpenWest 的演講 ",-1)),e(p,{href:"https://www.openwest.org/schedule/#talk-5"},{default:l(()=>[...s[52]||(s[52]=[n("JavaScript the Good-er Parts",-1)])]),_:1}),s[55]||(s[55]=n(". ",-1)),e(p,{href:"https://www.openwest.org/"},{default:l(()=>[...s[53]||(s[53]=[n("OpenWest",-1)])]),_:1}),s[56]||(s[56]=n()),s[57]||(s[57]=a("s",null,"將",-1)),s[58]||(s[58]=n("在 6/12-15 ,2017 在 Salt Lake City, Utah 舉行。",-1))])]),s[82]||(s[82]=a("hr",null,null,-1)),s[83]||(s[83]=a("p",null,"作者簡介：",-1)),s[84]||(s[84]=a("p",null,"Matt Banz - Matt 於 2008 年五月在猶他大學獲得了數學學位畢業。一個月後他得到了一份 web 開發者的工作，他從那時起就愛上了它！在 2013 年，他在北卡羅萊納州立大學獲得了計算機科學碩士學位。他在 LDS 商學院和戴維斯學區社區教育計劃教授 Web 課程。他現在是就職於 Motorola Solutions 公司的高級前端開發者。",-1)),s[85]||(s[85]=a("hr",null,null,-1)),a("p",null,[s[60]||(s[60]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/17/6/functional-javascript"},{default:l(()=>[...s[59]||(s[59]=[n("https://opensource.com/article/17/6/functional-javascript",-1)])]),_:1})]),a("p",null,[s[64]||(s[64]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/battmanz"},{default:l(()=>[...s[61]||(s[61]=[n("Matt Banz",-1)])]),_:1}),s[65]||(s[65]=n(" 譯者：",-1)),e(p,{href:"https://github.com/trnhoe"},{default:l(()=>[...s[62]||(s[62]=[n("trnhoe",-1)])]),_:1}),s[66]||(s[66]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[63]||(s[63]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[69]||(s[69]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[67]||(s[67]=[n("LCTT",-1)])]),_:1}),s[70]||(s[70]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[68]||(s[68]=[n("Linux中國",-1)])]),_:1}),s[71]||(s[71]=n(" 榮譽推出",-1))])])}const C=t(d,[["render",u]]);export{y as __pageData,C as default};
