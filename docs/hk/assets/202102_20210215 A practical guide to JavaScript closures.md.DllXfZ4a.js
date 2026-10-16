import{_ as t,a0 as o,w as r,s as i,I as n,x as a,a1 as p,A as l,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"JavaScript 閉包實踐 | LCTT x X-CMD","titleTemplate":false,"description":"JavaScript 閉包實踐 | LCTT (202102) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JavaScript 閉包實踐 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JavaScript 閉包實踐 | LCTT (202102) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202102/20210215 A practical guide to JavaScript closures","title":"JavaScript 閉包實踐","tag":"202102","desc":""},"relativePath":"202102/20210215 A practical guide to JavaScript closures.md","filePath":"[post].md"}'),c={name:"202102/20210215 A practical guide to JavaScript closures.md"};function d(m,s,g,h,f,v){const e=o("Link");return r(),i("div",null,[s[23]||(s[23]=n("h1",{id:"javascript-閉包實踐",tabindex:"-1"},[a("JavaScript 閉包實踐 "),n("a",{class:"header-anchor",href:"#javascript-閉包實踐","aria-label":"Permalink to “JavaScript 閉包實踐”"},"​")],-1)),s[24]||(s[24]=n("blockquote",null,[n("p",null,"通過深入瞭解 JavaScript 的高級概念之一：閉包，更好地理解 JavaScript 代碼的工作和執行方式。")],-1)),s[25]||(s[25]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202102/21/162941ogyb74z3ahfbfe35.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在《",-1)),p(e,{href:"https://linux.cn/article-12830-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("JavaScript 如此受歡迎的 4 個原因",-1)])]),_:1}),s[2]||(s[2]=a("》中，我提到了一些高級 JavaScript 概念。在本文中，我將深入探討其中的一個概念：",-1)),s[3]||(s[3]=n("ruby",null,[a("閉包"),n("rt",null,"closure")],-1)),s[4]||(s[4]=a("。",-1))]),n("p",null,[s[6]||(s[6]=a("根據 ",-1)),p(e,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},{default:l(()=>[...s[5]||(s[5]=[a("Mozilla 開發者網絡",-1)])]),_:1}),s[7]||(s[7]=a("（MDN），“閉包是將一個函數和對其周圍的狀態（詞法環境）的引用捆綁在一起（封閉）的組合。”簡而言之，這意味着在一個函數內部的函數可以訪問其外部（父）函數的變量。",-1))]),s[26]||(s[26]=u(`<p>為了更好地理解閉包，可以看看作用域及其執行上下文。</p><p>下面是一個簡單的代碼片段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var hello = &quot;Hello&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sayHelloWorld() {</span></span>
<span class="line"><span>    var world = &quot;World&quot;;</span></span>
<span class="line"><span>    function wish() {</span></span>
<span class="line"><span>        var year = &quot;2021&quot;;</span></span>
<span class="line"><span>        console.log(hello + &quot; &quot; + world + &quot; &quot;+ year);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    wish();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sayHelloWorld();</span></span></code></pre></div><p>下面是這段代碼的執行上下文：</p><p><img src="https://opensource.com/sites/default/files/uploads/execution-context.png" alt="JS 代碼的執行上下文" title="Execution context for JS code"></p><p>每次創建函數時（在函數創建階段）都會創建閉包。每個閉包有三個作用域。</p><ul><li>本地作用域（自己的作用域）</li><li>外部函數範圍</li><li>全局範圍</li></ul><p>我稍微修改一下上面的代碼來演示一下閉包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var hello = &quot;Hello&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var sayHelloWorld = function() {</span></span>
<span class="line"><span>    var world = &quot;World&quot;;</span></span>
<span class="line"><span>    function wish() {</span></span>
<span class="line"><span>        var year = &quot;2021&quot;;</span></span>
<span class="line"><span>        console.log(hello + &quot; &quot; + world + &quot; &quot;+ year);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return wish;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var callFunc = sayHelloWorld();</span></span>
<span class="line"><span>callFunc();</span></span></code></pre></div><p>內部函數 <code>wish()</code> 在執行之前就從外部函數返回。這是因為 JavaScript 中的函數形成了<strong>閉包</strong>。</p><ul><li>當 <code>sayHelloWorld</code> 運行時，<code>callFunc</code> 持有對函數 <code>wish</code> 的引用。</li><li><code>wish</code> 保持對其周圍（詞法）環境的引用，其中存在變量 <code>world</code>。</li></ul><h3 id="私有變量和方法" tabindex="-1">私有變量和方法 <a class="header-anchor" href="#私有變量和方法" aria-label="Permalink to “私有變量和方法”">​</a></h3><p>本身，JavaScript 不支持創建私有變量和方法。閉包的一個常見和實用的用途是模擬私有變量和方法，並允許數據隱私。在閉包範圍內定義的方法是有特權的。</p><p>這個代碼片段捕捉了 JavaScript 中閉包的常用編寫和使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var resourceRecord = function(myName, myAddress) {</span></span>
<span class="line"><span>    var resourceName = myName;</span></span>
<span class="line"><span>    var resourceAddress = myAddress;</span></span>
<span class="line"><span>    var accessRight = &quot;HR&quot;;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        changeName: function(updateName, privilege) {</span></span>
<span class="line"><span>            // only HR can change the name</span></span>
<span class="line"><span>            if (privilege === accessRight ) {</span></span>
<span class="line"><span>                resourceName = updateName;</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },  </span></span>
<span class="line"><span>        changeAddress: function(newAddress) {</span></span>
<span class="line"><span>            // any associate can change the address</span></span>
<span class="line"><span>            resourceAddress = newAddress;          </span></span>
<span class="line"><span>        },  </span></span>
<span class="line"><span>        showResourceDetail: function() {</span></span>
<span class="line"><span>            console.log (&quot;Name:&quot; + resourceName + &quot; ; Address:&quot; + resourceAddress);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// Create first record</span></span>
<span class="line"><span>var resourceRecord1 = resourceRecord(&quot;Perry&quot;,&quot;Office&quot;);</span></span>
<span class="line"><span>// Create second record</span></span>
<span class="line"><span>var resourceRecord2 = resourceRecord(&quot;Emma&quot;,&quot;Office&quot;);</span></span>
<span class="line"><span>// Change the address on the first record</span></span>
<span class="line"><span>resourceRecord1.changeAddress(&quot;Home&quot;);</span></span>
<span class="line"><span>resourceRecord1.changeName(&quot;Perry Berry&quot;, &quot;Associate&quot;); // Output is false as only an HR can change the name</span></span>
<span class="line"><span>resourceRecord2.changeName(&quot;Emma Freeman&quot;, &quot;HR&quot;); // Output is true as HR changes the name</span></span>
<span class="line"><span>resourceRecord1.showResourceDetail(); // Output - Name:Perry ; Address:Home</span></span>
<span class="line"><span>resourceRecord2.showResourceDetail(); // Output - Name:Emma Freeman ; Address:Office</span></span></code></pre></div><p>資源記錄（<code>resourceRecord1</code> 和 <code>resourceRecord2</code>）相互獨立。每個閉包通過自己的閉包引用不同版本的 <code>resourceName</code> 和 <code>resourceAddress</code> 變量。你也可以應用特定的規則來處理私有變量，我添加了一個誰可以修改 <code>resourceName</code> 的檢查。</p><h3 id="使用閉包" tabindex="-1">使用閉包 <a class="header-anchor" href="#使用閉包" aria-label="Permalink to “使用閉包”">​</a></h3><p>理解閉包是很重要的，因為它可以更深入地瞭解變量和函數之間的關係，以及 JavaScript 代碼如何工作和執行。</p><hr>`,19)),n("p",null,[s[9]||(s[9]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/21/2/javascript-closures"},{default:l(()=>[...s[8]||(s[8]=[a("https://opensource.com/article/21/2/javascript-closures",-1)])]),_:1})]),n("p",null,[s[14]||(s[14]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/nimisha"},{default:l(()=>[...s[10]||(s[10]=[a("Nimisha Mukherjee",-1)])]),_:1}),s[15]||(s[15]=a(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 譯者：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1}),s[17]||(s[17]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[a("Linux中國",-1)])]),_:1}),s[22]||(s[22]=a(" 榮譽推出",-1))])])}const y=t(c,[["render",d]]);export{k as __pageData,y as default};
