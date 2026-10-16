import{_ as t,a0 as o,w as r,s as i,I as n,x as a,a1 as p,A as l,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"JavaScript 闭包实践 | LCTT x X-CMD","titleTemplate":false,"description":"JavaScript 闭包实践 | LCTT (202102) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JavaScript 闭包实践 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JavaScript 闭包实践 | LCTT (202102) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202102/20210215 A practical guide to JavaScript closures","title":"JavaScript 闭包实践","tag":"202102","desc":""},"relativePath":"202102/20210215 A practical guide to JavaScript closures.md","filePath":"[post].md"}'),c={name:"202102/20210215 A practical guide to JavaScript closures.md"};function d(m,s,g,h,f,v){const e=o("Link");return r(),i("div",null,[s[23]||(s[23]=n("h1",{id:"javascript-闭包实践",tabindex:"-1"},[a("JavaScript 闭包实践 "),n("a",{class:"header-anchor",href:"#javascript-闭包实践","aria-label":"Permalink to “JavaScript 闭包实践”"},"​")],-1)),s[24]||(s[24]=n("blockquote",null,[n("p",null,"通过深入了解 JavaScript 的高级概念之一：闭包，更好地理解 JavaScript 代码的工作和执行方式。")],-1)),s[25]||(s[25]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202102/21/162941ogyb74z3ahfbfe35.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在《",-1)),p(e,{href:"https://linux.cn/article-12830-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("JavaScript 如此受欢迎的 4 个原因",-1)])]),_:1}),s[2]||(s[2]=a("》中，我提到了一些高级 JavaScript 概念。在本文中，我将深入探讨其中的一个概念：",-1)),s[3]||(s[3]=n("ruby",null,[a("闭包"),n("rt",null,"closure")],-1)),s[4]||(s[4]=a("。",-1))]),n("p",null,[s[6]||(s[6]=a("根据 ",-1)),p(e,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},{default:l(()=>[...s[5]||(s[5]=[a("Mozilla 开发者网络",-1)])]),_:1}),s[7]||(s[7]=a("（MDN），“闭包是将一个函数和对其周围的状态（词法环境）的引用捆绑在一起（封闭）的组合。”简而言之，这意味着在一个函数内部的函数可以访问其外部（父）函数的变量。",-1))]),s[26]||(s[26]=u(`<p>为了更好地理解闭包，可以看看作用域及其执行上下文。</p><p>下面是一个简单的代码片段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var hello = &quot;Hello&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sayHelloWorld() {</span></span>
<span class="line"><span>    var world = &quot;World&quot;;</span></span>
<span class="line"><span>    function wish() {</span></span>
<span class="line"><span>        var year = &quot;2021&quot;;</span></span>
<span class="line"><span>        console.log(hello + &quot; &quot; + world + &quot; &quot;+ year);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    wish();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sayHelloWorld();</span></span></code></pre></div><p>下面是这段代码的执行上下文：</p><p><img src="https://opensource.com/sites/default/files/uploads/execution-context.png" alt="JS 代码的执行上下文" title="Execution context for JS code"></p><p>每次创建函数时（在函数创建阶段）都会创建闭包。每个闭包有三个作用域。</p><ul><li>本地作用域（自己的作用域）</li><li>外部函数范围</li><li>全局范围</li></ul><p>我稍微修改一下上面的代码来演示一下闭包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var hello = &quot;Hello&quot;;</span></span>
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
<span class="line"><span>callFunc();</span></span></code></pre></div><p>内部函数 <code>wish()</code> 在执行之前就从外部函数返回。这是因为 JavaScript 中的函数形成了<strong>闭包</strong>。</p><ul><li>当 <code>sayHelloWorld</code> 运行时，<code>callFunc</code> 持有对函数 <code>wish</code> 的引用。</li><li><code>wish</code> 保持对其周围（词法）环境的引用，其中存在变量 <code>world</code>。</li></ul><h3 id="私有变量和方法" tabindex="-1">私有变量和方法 <a class="header-anchor" href="#私有变量和方法" aria-label="Permalink to “私有变量和方法”">​</a></h3><p>本身，JavaScript 不支持创建私有变量和方法。闭包的一个常见和实用的用途是模拟私有变量和方法，并允许数据隐私。在闭包范围内定义的方法是有特权的。</p><p>这个代码片段捕捉了 JavaScript 中闭包的常用编写和使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var resourceRecord = function(myName, myAddress) {</span></span>
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
<span class="line"><span>resourceRecord2.showResourceDetail(); // Output - Name:Emma Freeman ; Address:Office</span></span></code></pre></div><p>资源记录（<code>resourceRecord1</code> 和 <code>resourceRecord2</code>）相互独立。每个闭包通过自己的闭包引用不同版本的 <code>resourceName</code> 和 <code>resourceAddress</code> 变量。你也可以应用特定的规则来处理私有变量，我添加了一个谁可以修改 <code>resourceName</code> 的检查。</p><h3 id="使用闭包" tabindex="-1">使用闭包 <a class="header-anchor" href="#使用闭包" aria-label="Permalink to “使用闭包”">​</a></h3><p>理解闭包是很重要的，因为它可以更深入地了解变量和函数之间的关系，以及 JavaScript 代码如何工作和执行。</p><hr>`,19)),n("p",null,[s[9]||(s[9]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/21/2/javascript-closures"},{default:l(()=>[...s[8]||(s[8]=[a("https://opensource.com/article/21/2/javascript-closures",-1)])]),_:1})]),n("p",null,[s[14]||(s[14]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/nimisha"},{default:l(()=>[...s[10]||(s[10]=[a("Nimisha Mukherjee",-1)])]),_:1}),s[15]||(s[15]=a(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[a("lujun9972",-1)])]),_:1}),s[16]||(s[16]=a(" 译者：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[12]||(s[12]=[a("wxy",-1)])]),_:1}),s[17]||(s[17]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[20]||(s[20]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[a("LCTT",-1)])]),_:1}),s[21]||(s[21]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[a("Linux中国",-1)])]),_:1}),s[22]||(s[22]=a(" 荣誉推出",-1))])])}const y=t(c,[["render",d]]);export{k as __pageData,y as default};
