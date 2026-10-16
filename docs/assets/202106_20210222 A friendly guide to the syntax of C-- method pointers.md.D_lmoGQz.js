import{_ as l,a0 as d,w as o,s as r,I as i,x as n,a1 as p,A as t,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"C++ 类成员函数指针语法的友好指南 | LCTT x X-CMD","titleTemplate":false,"description":"C++ 类成员函数指针语法的友好指南 | LCTT (202106) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"C++ 类成员函数指针语法的友好指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"C++ 类成员函数指针语法的友好指南 | LCTT (202106) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202106/20210222 A friendly guide to the syntax of C-- method pointers","title":"C++ 类成员函数指针语法的友好指南","tag":"202106","desc":""},"relativePath":"202106/20210222 A friendly guide to the syntax of C-- method pointers.md","filePath":"[post].md"}'),c={name:"202106/20210222 A friendly guide to the syntax of C-- method pointers.md"};function h(g,s,u,k,m,b){const a=d("Link");return o(),r("div",null,[s[31]||(s[31]=i("h1",{id:"c-类成员函数指针语法的友好指南",tabindex:"-1"},[n("C++ 类成员函数指针语法的友好指南 "),i("a",{class:"header-anchor",href:"#c-类成员函数指针语法的友好指南","aria-label":"Permalink to “C++ 类成员函数指针语法的友好指南”"},"​")],-1)),s[32]||(s[32]=i("blockquote",null,[i("p",null,"一旦你理解了一般原则，C++ 类成员函数指针不再那么令人生畏。")],-1)),s[33]||(s[33]=i("p",null,[i("img",{src:"https://img.linux.net.cn/data/attachment/album/202106/18/104200rm48h22eghehg2p3.jpg",alt:""})],-1)),i("p",null,[s[2]||(s[2]=n("如果你正在寻找性能、复杂性或许多可能的解决方法来解决问题，那么在涉及到极端的情况下，",-1)),p(a,{href:"https://en.wikipedia.org/wiki/C++"},{default:t(()=>[...s[0]||(s[0]=[n("C++",-1)])]),_:1}),s[3]||(s[3]=n(" 总是一个很好的选择。当然，功能通常伴随着复杂性，但是一些 C++ 的特性几乎难以分辨。根据我的观点，C++ 的 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Function_pointer#Method_pointers"},{default:t(()=>[...s[1]||(s[1]=[n("类成员函数指针",-1)])]),_:1}),s[4]||(s[4]=n(" 也许是我接触过的最复杂的表达式，但是我会先从一些较简单的开始。",-1))]),i("p",null,[s[6]||(s[6]=n("文章中的例子可以在我的 ",-1)),p(a,{href:"https://github.com/hANSIc99/worst_possible_syntax"},{default:t(()=>[...s[5]||(s[5]=[n("Github 仓库",-1)])]),_:1}),s[7]||(s[7]=n(" 里找到。",-1))]),s[34]||(s[34]=e(`<h3 id="c-语言-函数指针" tabindex="-1">C 语言：函数指针 <a class="header-anchor" href="#c-语言-函数指针" aria-label="Permalink to “C 语言：函数指针”">​</a></h3><p>让我们先从一些基础开始：假设你有一个函数接收两个整数作为参数返回一个整数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int sum(int a, int b) {</span></span>
<span class="line"><span>    return a+b;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在纯 C 语言中，你可以创建一个指向这个函数的指针，将其分配给你的 <code>sum(...)</code> 函数，通过解引用来调用它。函数的签名（参数、返回类型）必须符合指针的签名。除此之外，一个函数指针表现和普通的指针相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int (*funcPtrOne)(int, int);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>funcPtrOne = &amp;sum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int resultOne = funcPtrOne(2, 5);</span></span></code></pre></div><p>如果你使用指针作为参数并返回一个指针，这会显得很丑陋：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int *next(int *arrayOfInt){</span></span>
<span class="line"><span>    return ++arrayOfInt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int *(*funcPtrTwo)(int *intPtr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>funcPtrTwo = &amp;next;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int resultTwo = *funcPtrTwo(&amp;array[0]);</span></span></code></pre></div><p>C 语言中的函数指针存储着子程序的地址。</p><h3 id="指向类成员函数的指针" tabindex="-1">指向类成员函数的指针 <a class="header-anchor" href="#指向类成员函数的指针" aria-label="Permalink to “指向类成员函数的指针”">​</a></h3><p>让我们来进入 C++：好消息是你也许不需要使用类成员函数指针，除非在一个特别罕见的情况下，比如说接下来的例子。首先，你已经知道定义一个类和其中一个成员函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class MyClass</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int sum(int a, int b) {</span></span>
<span class="line"><span>        return a+b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre></div><h4 id="_1、定义一个指针指向某一个类中一个成员函数" tabindex="-1">1、定义一个指针指向某一个类中一个成员函数 <a class="header-anchor" href="#_1、定义一个指针指向某一个类中一个成员函数" aria-label="Permalink to “1、定义一个指针指向某一个类中一个成员函数”">​</a></h4><p>声明一个指针指向 <code>MyClass</code> 类成员函数。在此时，你并不知道想调用的具体函数。你仅仅声明了一个指向 <code>MyClass</code> 类中任意成员函数的指针。当然，签名（参数、返回值类型）需要匹配你接下想要调用的 <code>sum(...)</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int (MyClass::*methodPtrOne)(int, int);</span></span></code></pre></div><h4 id="_2、赋值给一个具体的函数" tabindex="-1">2、赋值给一个具体的函数 <a class="header-anchor" href="#_2、赋值给一个具体的函数" aria-label="Permalink to “2、赋值给一个具体的函数”">​</a></h4>`,15)),i("p",null,[s[10]||(s[10]=n("为了和 C 语言（或者 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Static_(keyword)#Static_method"},{default:t(()=>[...s[8]||(s[8]=[n("静态成员函数",-1)])]),_:1}),s[11]||(s[11]=n("）对比，类成员函数指针不需要指向绝对地址。在 C++ 中，每一个类中都有一个虚拟函数表（vtable）用来储存每个成员函数的地址偏移量。一个类成员函数指针指向 vtable 中的某个条目，因此它也只存储偏移值。这样的原则使得 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Dynamic_dispatch"},{default:t(()=>[...s[9]||(s[9]=[n("多态",-1)])]),_:1}),s[12]||(s[12]=n(" 变得可行。",-1))]),s[35]||(s[35]=e(`<p>因为 <code>sum(...)</code> 函数的签名和你的指针声明匹配，你可以赋值签名给它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>methodPtrOne = &amp;MyClass::sum;</span></span></code></pre></div><h4 id="_3、调用成员函数" tabindex="-1">3、调用成员函数 <a class="header-anchor" href="#_3、调用成员函数" aria-label="Permalink to “3、调用成员函数”">​</a></h4><p>如果你想使用指针调用一个类成员函，你必须提供一个类的实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>MyClass clsInstance;</span></span>
<span class="line"><span>int result = (clsInstance.*methodPtrOne)(2,3);</span></span></code></pre></div><p>你可以使用 <code>.</code> 操作符来访问，使用 <code>*</code> 对指针解引用，通过提供两个整数作为调用函数时的参数。这是丑陋的，对吧？但是你可以进一步应用。</p><h3 id="在类内使用类成员函数指针" tabindex="-1">在类内使用类成员函数指针 <a class="header-anchor" href="#在类内使用类成员函数指针" aria-label="Permalink to “在类内使用类成员函数指针”">​</a></h3>`,7)),i("p",null,[s[14]||(s[14]=n("假设你正在创建一个带有后端和前端的 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model"},{default:t(()=>[...s[13]||(s[13]=[n("客户端/服务器",-1)])]),_:1}),s[15]||(s[15]=n(" 原理架构的应用程序。你现在并不需要关心后端，相反的，你将基于 C++ 类的前端。前端依赖于后端提供的数据完成初始化，所以你需要一个额外的初始化机制。同时，你希望通用地实现此机制，以便将来可以使用其他初始化函数（可能是动态的）来拓展你的前端。",-1))]),s[36]||(s[36]=e(`<p>首先定义一个数据类型用来存储初始化函数（<code>init</code>）的指针，同时描述何时应调用此函数的信息（<code>ticks</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>template&lt;typename T&gt;</span></span>
<span class="line"><span>struct DynamicInitCommand {</span></span>
<span class="line"><span>    void (T::*init)();     // 指向额外的初始化函数</span></span>
<span class="line"><span>    unsigned int ticks;    // 在 init() 调用后 ticks 的数量</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>下面一个 <code>Frontend</code> 类示例代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class  Frontend</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Frontend(){</span></span>
<span class="line"><span>        DynamicInitCommand&lt;Frontend&gt; init1, init2, init3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        init1 = { &amp;Frontend::dynamicInit1, 5};</span></span>
<span class="line"><span>        init2 = { &amp;Frontend::dynamicInit2, 10};</span></span>
<span class="line"><span>        init3 = { &amp;Frontend::dynamicInit3, 15};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        m_dynamicInit.push_back(init1);</span></span>
<span class="line"><span>        m_dynamicInit.push_back(init2);</span></span>
<span class="line"><span>        m_dynamicInit.push_back(init3);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    void  tick(){</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;tick: &quot; &lt;&lt; ++m_ticks &lt;&lt; std::endl;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        /* 检查延迟初始化 */</span></span>
<span class="line"><span>        std::vector&lt;DynamicInitCommand&lt;Frontend&gt;&gt;::iterator  it = m_dynamicInit.begin();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while (it != m_dynamicInit.end()){</span></span>
<span class="line"><span>            if (it-&gt;ticks &lt; m_ticks){</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>                if(it-&gt;init)</span></span>
<span class="line"><span>                    ((*this).*(it-&gt;init))(); // 这里是具体调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                it = m_dynamicInit.erase(it);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                it++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    unsigned  int  m_ticks{0};</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void  dynamicInit1(){</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;dynamicInit1 called&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void  dynamicInit2(){</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;dynamicInit2 called&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void  dynamicInit3(){</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;dynamicInit3 called&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    unsigned  int  m_initCnt{0};</span></span>
<span class="line"><span>    std::vector&lt;DynamicInitCommand&lt;Frontend&gt; &gt; m_dynamicInit;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>在 <code>Frontend</code> 完成实例化后，<code>tick()</code> 函数会被后端以固定的时间时间调用。例如，你可以每 200 毫秒调用一次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int  main(int  argc, char*  argv[]){</span></span>
<span class="line"><span>    Frontend frontendInstance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while(true){</span></span>
<span class="line"><span>        frontendInstance.tick(); // 仅用于模拟目的</span></span>
<span class="line"><span>        std::this_thread::sleep_for(std::chrono::milliseconds(200));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>Fronted</code> 有三个额外的初始化函数，它们必须根据 <code>m_ticks</code> 的值来选择调用哪个。在 ticks 等于何值调用哪个初始化函数的信息存储在数组 <code>m_dynamicInit</code> 中。在构造函数（<code>Frontend()</code>）中，将此信息附加到数组中，以便在 5、10 和 15 个 tick 后调用其他初始化函数。当后端调用 <code>tick()</code> 函数时，<code>m_ticks</code> 值会递增，同时遍历数组 <code>m_dynamicInit</code> 以检查是否必须调用初始化函数。</p><p>如果是这种情况，则必须通过引用 <code>this</code> 指针来取消引用成员函数指针：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>((*this).*(it-&gt;init))()</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>如果你并不熟悉类成员函数指针，它们可能会显得有些复杂。我做了很多尝试和经历了很多错误，花了一些时间来找到正确的语法。然而，一旦你理解了一般原理后，方法指针就变得不那么可怕了。</p><p>这是迄今为止我在 C++ 中发现的最复杂的语法。 你还知道更糟糕的吗？ 在评论中发布你的观点！</p><hr>`,13)),i("p",null,[s[17]||(s[17]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/21/2/ccc-method-pointers"},{default:t(()=>[...s[16]||(s[16]=[n("https://opensource.com/article/21/2/ccc-method-pointers",-1)])]),_:1})]),i("p",null,[s[22]||(s[22]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/hansic99"},{default:t(()=>[...s[18]||(s[18]=[n("Stephan Avenwedde",-1)])]),_:1}),s[23]||(s[23]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[19]||(s[19]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 译者：",-1)),p(a,{href:"https://github.com/mengxinayan"},{default:t(()=>[...s[20]||(s[20]=[n("萌新阿岩",-1)])]),_:1}),s[25]||(s[25]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[28]||(s[28]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:t(()=>[...s[27]||(s[27]=[n("Linux中国",-1)])]),_:1}),s[30]||(s[30]=n(" 荣誉推出",-1))])])}const x=l(c,[["render",h]]);export{C as __pageData,x as default};
