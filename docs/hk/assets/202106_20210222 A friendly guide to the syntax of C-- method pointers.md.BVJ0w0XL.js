import{_ as l,a0 as d,w as o,s as r,I as i,x as n,a1 as p,A as t,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"C++ 類成員函數指針語法的友好指南 | LCTT x X-CMD","titleTemplate":false,"description":"C++ 類成員函數指針語法的友好指南 | LCTT (202106) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"C++ 類成員函數指針語法的友好指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"C++ 類成員函數指針語法的友好指南 | LCTT (202106) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202106/20210222 A friendly guide to the syntax of C-- method pointers","title":"C++ 類成員函數指針語法的友好指南","tag":"202106","desc":""},"relativePath":"202106/20210222 A friendly guide to the syntax of C-- method pointers.md","filePath":"[post].md"}'),c={name:"202106/20210222 A friendly guide to the syntax of C-- method pointers.md"};function h(g,s,u,k,m,b){const a=d("Link");return o(),r("div",null,[s[31]||(s[31]=i("h1",{id:"c-類成員函數指針語法的友好指南",tabindex:"-1"},[n("C++ 類成員函數指針語法的友好指南 "),i("a",{class:"header-anchor",href:"#c-類成員函數指針語法的友好指南","aria-label":"Permalink to “C++ 類成員函數指針語法的友好指南”"},"​")],-1)),s[32]||(s[32]=i("blockquote",null,[i("p",null,"一旦你理解了一般原則，C++ 類成員函數指針不再那麼令人生畏。")],-1)),s[33]||(s[33]=i("p",null,[i("img",{src:"https://img.linux.net.cn/data/attachment/album/202106/18/104200rm48h22eghehg2p3.jpg",alt:""})],-1)),i("p",null,[s[2]||(s[2]=n("如果你正在尋找性能、複雜性或許多可能的解決方法來解決問題，那麼在涉及到極端的情況下，",-1)),p(a,{href:"https://en.wikipedia.org/wiki/C++"},{default:t(()=>[...s[0]||(s[0]=[n("C++",-1)])]),_:1}),s[3]||(s[3]=n(" 總是一個很好的選擇。當然，功能通常伴隨着複雜性，但是一些 C++ 的特性幾乎難以分辨。根據我的觀點，C++ 的 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Function_pointer#Method_pointers"},{default:t(()=>[...s[1]||(s[1]=[n("類成員函數指針",-1)])]),_:1}),s[4]||(s[4]=n(" 也許是我接觸過的最複雜的表達式，但是我會先從一些較簡單的開始。",-1))]),i("p",null,[s[6]||(s[6]=n("文章中的例子可以在我的 ",-1)),p(a,{href:"https://github.com/hANSIc99/worst_possible_syntax"},{default:t(()=>[...s[5]||(s[5]=[n("Github 倉庫",-1)])]),_:1}),s[7]||(s[7]=n(" 裏找到。",-1))]),s[34]||(s[34]=e(`<h3 id="c-語言-函數指針" tabindex="-1">C 語言：函數指針 <a class="header-anchor" href="#c-語言-函數指針" aria-label="Permalink to “C 語言：函數指針”">​</a></h3><p>讓我們先從一些基礎開始：假設你有一個函數接收兩個整數作為參數返回一個整數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int sum(int a, int b) {</span></span>
<span class="line"><span>    return a+b;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在純 C 語言中，你可以創建一個指向這個函數的指針，將其分配給你的 <code>sum(...)</code> 函數，通過解引用來調用它。函數的簽名（參數、返回類型）必須符合指針的簽名。除此之外，一個函數指針表現和普通的指針相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int (*funcPtrOne)(int, int);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>funcPtrOne = &amp;sum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int resultOne = funcPtrOne(2, 5);</span></span></code></pre></div><p>如果你使用指針作為參數並返回一個指針，這會顯得很醜陋：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int *next(int *arrayOfInt){</span></span>
<span class="line"><span>    return ++arrayOfInt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int *(*funcPtrTwo)(int *intPtr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>funcPtrTwo = &amp;next;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int resultTwo = *funcPtrTwo(&amp;array[0]);</span></span></code></pre></div><p>C 語言中的函數指針存儲着子程序的地址。</p><h3 id="指向類成員函數的指針" tabindex="-1">指向類成員函數的指針 <a class="header-anchor" href="#指向類成員函數的指針" aria-label="Permalink to “指向類成員函數的指針”">​</a></h3><p>讓我們來進入 C++：好消息是你也許不需要使用類成員函數指針，除非在一個特別罕見的情況下，比如説接下來的例子。首先，你已經知道定義一個類和其中一個成員函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class MyClass</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int sum(int a, int b) {</span></span>
<span class="line"><span>        return a+b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre></div><h4 id="_1、定義一個指針指向某一個類中一個成員函數" tabindex="-1">1、定義一個指針指向某一個類中一個成員函數 <a class="header-anchor" href="#_1、定義一個指針指向某一個類中一個成員函數" aria-label="Permalink to “1、定義一個指針指向某一個類中一個成員函數”">​</a></h4><p>聲明一個指針指向 <code>MyClass</code> 類成員函數。在此時，你並不知道想調用的具體函數。你僅僅聲明瞭一個指向 <code>MyClass</code> 類中任意成員函數的指針。當然，簽名（參數、返回值類型）需要匹配你接下想要調用的 <code>sum(...)</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int (MyClass::*methodPtrOne)(int, int);</span></span></code></pre></div><h4 id="_2、賦值給一個具體的函數" tabindex="-1">2、賦值給一個具體的函數 <a class="header-anchor" href="#_2、賦值給一個具體的函數" aria-label="Permalink to “2、賦值給一個具體的函數”">​</a></h4>`,15)),i("p",null,[s[10]||(s[10]=n("為了和 C 語言（或者 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Static_(keyword)#Static_method"},{default:t(()=>[...s[8]||(s[8]=[n("靜態成員函數",-1)])]),_:1}),s[11]||(s[11]=n("）對比，類成員函數指針不需要指向絕對地址。在 C++ 中，每一個類中都有一個虛擬函數表（vtable）用來儲存每個成員函數的地址偏移量。一個類成員函數指針指向 vtable 中的某個條目，因此它也只存儲偏移值。這樣的原則使得 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Dynamic_dispatch"},{default:t(()=>[...s[9]||(s[9]=[n("多態",-1)])]),_:1}),s[12]||(s[12]=n(" 變得可行。",-1))]),s[35]||(s[35]=e(`<p>因為 <code>sum(...)</code> 函數的簽名和你的指針聲明匹配，你可以賦值簽名給它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>methodPtrOne = &amp;MyClass::sum;</span></span></code></pre></div><h4 id="_3、調用成員函數" tabindex="-1">3、調用成員函數 <a class="header-anchor" href="#_3、調用成員函數" aria-label="Permalink to “3、調用成員函數”">​</a></h4><p>如果你想使用指針調用一個類成員函，你必須提供一個類的實例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>MyClass clsInstance;</span></span>
<span class="line"><span>int result = (clsInstance.*methodPtrOne)(2,3);</span></span></code></pre></div><p>你可以使用 <code>.</code> 操作符來訪問，使用 <code>*</code> 對指針解引用，通過提供兩個整數作為調用函數時的參數。這是醜陋的，對吧？但是你可以進一步應用。</p><h3 id="在類內使用類成員函數指針" tabindex="-1">在類內使用類成員函數指針 <a class="header-anchor" href="#在類內使用類成員函數指針" aria-label="Permalink to “在類內使用類成員函數指針”">​</a></h3>`,7)),i("p",null,[s[14]||(s[14]=n("假設你正在創建一個帶有後端和前端的 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model"},{default:t(()=>[...s[13]||(s[13]=[n("客户端/服務器",-1)])]),_:1}),s[15]||(s[15]=n(" 原理架構的應用程序。你現在並不需要關心後端，相反的，你將基於 C++ 類的前端。前端依賴於後端提供的數據完成初始化，所以你需要一個額外的初始化機制。同時，你希望通用地實現此機制，以便將來可以使用其他初始化函數（可能是動態的）來拓展你的前端。",-1))]),s[36]||(s[36]=e(`<p>首先定義一個數據類型用來存儲初始化函數（<code>init</code>）的指針，同時描述何時應調用此函數的信息（<code>ticks</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>template&lt;typename T&gt;</span></span>
<span class="line"><span>struct DynamicInitCommand {</span></span>
<span class="line"><span>    void (T::*init)();     // 指向額外的初始化函數</span></span>
<span class="line"><span>    unsigned int ticks;    // 在 init() 調用後 ticks 的數量</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>下面一個 <code>Frontend</code> 類示例代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class  Frontend</span></span>
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
<span class="line"><span>        /* 檢查延遲初始化 */</span></span>
<span class="line"><span>        std::vector&lt;DynamicInitCommand&lt;Frontend&gt;&gt;::iterator  it = m_dynamicInit.begin();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while (it != m_dynamicInit.end()){</span></span>
<span class="line"><span>            if (it-&gt;ticks &lt; m_ticks){</span></span>
<span class="line"><span>                 </span></span>
<span class="line"><span>                if(it-&gt;init)</span></span>
<span class="line"><span>                    ((*this).*(it-&gt;init))(); // 這裏是具體調用</span></span>
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
<span class="line"><span>};</span></span></code></pre></div><p>在 <code>Frontend</code> 完成實例化後，<code>tick()</code> 函數會被後端以固定的時間時間調用。例如，你可以每 200 毫秒調用一次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int  main(int  argc, char*  argv[]){</span></span>
<span class="line"><span>    Frontend frontendInstance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while(true){</span></span>
<span class="line"><span>        frontendInstance.tick(); // 僅用於模擬目的</span></span>
<span class="line"><span>        std::this_thread::sleep_for(std::chrono::milliseconds(200));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>Fronted</code> 有三個額外的初始化函數，它們必須根據 <code>m_ticks</code> 的值來選擇調用哪個。在 ticks 等於何值調用哪個初始化函數的信息存儲在數組 <code>m_dynamicInit</code> 中。在構造函數（<code>Frontend()</code>）中，將此信息附加到數組中，以便在 5、10 和 15 個 tick 後調用其他初始化函數。當後端調用 <code>tick()</code> 函數時，<code>m_ticks</code> 值會遞增，同時遍歷數組 <code>m_dynamicInit</code> 以檢查是否必須調用初始化函數。</p><p>如果是這種情況，則必須通過引用 <code>this</code> 指針來取消引用成員函數指針：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>((*this).*(it-&gt;init))()</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>如果你並不熟悉類成員函數指針，它們可能會顯得有些複雜。我做了很多嘗試和經歷了很多錯誤，花了一些時間來找到正確的語法。然而，一旦你理解了一般原理後，方法指針就變得不那麼可怕了。</p><p>這是迄今為止我在 C++ 中發現的最複雜的語法。 你還知道更糟糕的嗎？ 在評論中發佈你的觀點！</p><hr>`,13)),i("p",null,[s[17]||(s[17]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/21/2/ccc-method-pointers"},{default:t(()=>[...s[16]||(s[16]=[n("https://opensource.com/article/21/2/ccc-method-pointers",-1)])]),_:1})]),i("p",null,[s[22]||(s[22]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/hansic99"},{default:t(()=>[...s[18]||(s[18]=[n("Stephan Avenwedde",-1)])]),_:1}),s[23]||(s[23]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[19]||(s[19]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 譯者：",-1)),p(a,{href:"https://github.com/mengxinayan"},{default:t(()=>[...s[20]||(s[20]=[n("萌新阿巖",-1)])]),_:1}),s[25]||(s[25]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[28]||(s[28]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:t(()=>[...s[27]||(s[27]=[n("Linux中國",-1)])]),_:1}),s[30]||(s[30]=n(" 榮譽推出",-1))])])}const x=l(c,[["render",h]]);export{C as __pageData,x as default};
