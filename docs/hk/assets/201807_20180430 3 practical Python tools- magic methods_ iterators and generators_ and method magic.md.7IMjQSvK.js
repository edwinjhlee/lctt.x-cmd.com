import{_ as i,a0 as o,w as r,s as d,ao as l,I as a,x as n,a1 as t,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"日常 Python 編程優雅之道 | LCTT x X-CMD","titleTemplate":false,"description":"日常 Python 編程優雅之道 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"日常 Python 編程優雅之道 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"日常 Python 編程優雅之道 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180430 3 practical Python tools- magic methods, iterators and generators, and method magic","title":"日常 Python 編程優雅之道","tag":"201807","desc":""},"relativePath":"201807/20180430 3 practical Python tools- magic methods, iterators and generators, and method magic.md","filePath":"[post].md"}'),g={name:"201807/20180430 3 practical Python tools- magic methods, iterators and generators, and method magic.md"};function u(b,s,f,k,h,y){const p=o("Link");return r(),d("div",null,[s[124]||(s[124]=l(`<h1 id="日常-python-編程優雅之道" tabindex="-1">日常 Python 編程優雅之道 <a class="header-anchor" href="#日常-python-編程優雅之道" aria-label="Permalink to “日常 Python 編程優雅之道”">​</a></h1><blockquote><p>3 個可以使你的 Python 代碼更優雅、可讀、直觀和易於維護的工具。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/serving-bowl-forks-dinner.png?itok=a3YqPwr5" alt=""></p><p>Python 提供了一組獨特的工具和語言特性來使你的代碼更加優雅、可讀和直觀。為正確的問題選擇合適的工具，你的代碼將更易於維護。在本文中，我們將研究其中的三個工具：魔術方法、迭代器和生成器，以及方法魔術。</p><h3 id="魔術方法" tabindex="-1">魔術方法 <a class="header-anchor" href="#魔術方法" aria-label="Permalink to “魔術方法”">​</a></h3><p>魔術方法可以看作是 Python 的管道。它們被稱為“底層”方法，用於某些內置的方法、符號和操作。你可能熟悉的常見魔術方法是 <code>__init__()</code>，當我們想要初始化一個類的新實例時，它會被調用。</p><p>你可能已經看過其他常見的魔術方法，如 <code>__str__</code> 和 <code>__repr__</code>。Python 中有一整套魔術方法，通過實現其中的一些方法，我們可以修改一個對象的行為，甚至使其行為類似於內置數據類型，例如數字、列表或字典。</p><p>讓我們創建一個 <code>Money</code> 類來示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Money:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    currency_rates = {</span></span>
<span class="line"><span>        &#39;$&#39;: 1,</span></span>
<span class="line"><span>        &#39;€&#39;: 0.88,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, symbol, amount):</span></span>
<span class="line"><span>        self.symbol = symbol</span></span>
<span class="line"><span>        self.amount = amount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __repr__(self):</span></span>
<span class="line"><span>        return &#39;%s%.2f&#39; % (self.symbol, self.amount)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def convert(self, other):</span></span>
<span class="line"><span>        &quot;&quot;&quot; Convert other amount to our currency &quot;&quot;&quot;</span></span>
<span class="line"><span>        new_amount = (</span></span>
<span class="line"><span>            other.amount / self.currency_rates[other.symbol]</span></span>
<span class="line"><span>            * self.currency_rates[self.symbol])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return Money(self.symbol, new_amount)</span></span></code></pre></div><p>該類定義為給定的貨幣符號和匯率定義了一個貨幣匯率，指定了一個初始化器（也稱為構造函數），並實現 <code>__repr__</code>，因此當我們打印這個類時，我們會看到一個友好的表示，例如 <code>$2.00</code> ，這是一個帶有貨幣符號和金額的 <code>Money(&#39;$&#39;, 2.00)</code> 實例。最重要的是，它定義了一種方法，允許你使用不同的匯率在不同的貨幣之間進行轉換。</p><p>打開 Python shell，假設我們已經定義了使用兩種不同貨幣的食品的成本，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; soda_cost = Money(&#39;$&#39;, 5.25)</span></span>
<span class="line"><span>&gt;&gt;&gt; soda_cost</span></span>
<span class="line"><span>    $5.25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost = Money(&#39;€&#39;, 7.99)</span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost</span></span>
<span class="line"><span>    €7.99</span></span></code></pre></div><p>我們可以使用魔術方法使得這個類的實例之間可以相互交互。假設我們希望能夠將這個類的兩個實例一起加在一起，即使它們是不同的貨幣。為了實現這一點，我們可以在 <code>Money</code> 類上實現 <code>__add__</code> 這個魔術方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Money:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ... previously defined methods ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __add__(self, other):</span></span>
<span class="line"><span>        &quot;&quot;&quot; Add 2 Money instances using &#39;+&#39; &quot;&quot;&quot;</span></span>
<span class="line"><span>        new_amount = self.amount + self.convert(other).amount</span></span>
<span class="line"><span>        return Money(self.symbol, new_amount)</span></span></code></pre></div><p>現在我們可以以非常直觀的方式使用這個類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; soda_cost = Money(&#39;$&#39;, 5.25)</span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost = Money(&#39;€&#39;, 7.99)</span></span>
<span class="line"><span>&gt;&gt;&gt; soda_cost + pizza_cost</span></span>
<span class="line"><span>    $14.33</span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost + soda_cost</span></span>
<span class="line"><span>    €12.61</span></span></code></pre></div>`,16)),a("p",null,[s[2]||(s[2]=n("當我們將兩個實例加在一起時，我們得到以第一個定義的貨幣符號所表示的結果。所有的轉換都是在底層無縫完成的。如果我們想的話，我們也可以為減法實現 ",-1)),s[3]||(s[3]=a("code",null,"__sub__",-1)),s[4]||(s[4]=n("，為乘法實現 ",-1)),s[5]||(s[5]=a("code",null,"__mul__",-1)),s[6]||(s[6]=n(" 等等。閲讀",-1)),t(p,{href:"https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types"},{default:e(()=>[...s[0]||(s[0]=[n("模擬數字類型",-1)])]),_:1}),s[7]||(s[7]=n("或",-1)),t(p,{href:"https://rszalski.github.io/magicmethods/"},{default:e(()=>[...s[1]||(s[1]=[n("魔術方法指南",-1)])]),_:1}),s[8]||(s[8]=n("來獲得更多信息。",-1))]),s[125]||(s[125]=l(`<p>我們學習到 <code>__add__</code> 映射到內置運算符 <code>+</code>。其他魔術方法可以映射到像 <code>[]</code> 這樣的符號。例如，在字典中通過索引或鍵來獲得一項，其實是使用了 <code>__getitem__</code> 方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; d = {&#39;one&#39;: 1, &#39;two&#39;: 2}</span></span>
<span class="line"><span>&gt;&gt;&gt; d[&#39;two&#39;]</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>&gt;&gt;&gt; d.__getitem__(&#39;two&#39;)</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>一些魔術方法甚至映射到內置函數，例如 <code>__len__()</code> 映射到 <code>len()</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Alphabet:</span></span>
<span class="line"><span>    letters = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __len__(self):</span></span>
<span class="line"><span>        return len(self.letters)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; my_alphabet = Alphabet()</span></span>
<span class="line"><span>&gt;&gt;&gt; len(my_alphabet)</span></span>
<span class="line"><span>    26</span></span></code></pre></div><h3 id="自定義迭代器" tabindex="-1">自定義迭代器 <a class="header-anchor" href="#自定義迭代器" aria-label="Permalink to “自定義迭代器”">​</a></h3><p>對於新的和經驗豐富的 Python 開發者來説，自定義迭代器是一個非常強大的但令人迷惑的主題。</p><p>許多內置類型，例如列表、集合和字典，已經實現了允許它們在底層迭代的協議。這使我們可以輕鬆地遍歷它們。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; for food in [&#39;Pizza&#39;, &#39;Fries&#39;]:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         print(food + &#39;. Yum!&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pizza. Yum!</span></span>
<span class="line"><span>Fries. Yum!</span></span></code></pre></div><p>我們如何迭代我們自己的自定義類？首先，讓我們來澄清一些術語。</p>`,9)),a("ul",null,[s[18]||(s[18]=a("li",null,[n("要成為一個可迭代對象，一個類需要實現 "),a("code",null,"__iter__()")],-1)),s[19]||(s[19]=a("li",null,[a("code",null,"__iter__()"),n(" 方法需要返回一個迭代器")],-1)),a("li",null,[s[10]||(s[10]=n("要成為一個迭代器，一個類需要實現 ",-1)),s[11]||(s[11]=a("code",null,"__next__()",-1)),s[12]||(s[12]=n("（或",-1)),t(p,{href:"https://docs.python.org/2/library/stdtypes.html#iterator.next"},{default:e(()=>[...s[9]||(s[9]=[n("在 Python 2",-1)])]),_:1}),s[13]||(s[13]=n("中是 ",-1)),s[14]||(s[14]=a("code",null,"next()",-1)),s[15]||(s[15]=n("），當沒有更多的項要迭代時，必須拋出一個 ",-1)),s[16]||(s[16]=a("code",null,"StopIteration",-1)),s[17]||(s[17]=n(" 異常。",-1))])]),s[126]||(s[126]=l(`<p>呼！這聽起來很複雜，但是一旦你記住了這些基本概念，你就可以在任何時候進行迭代。</p><p>我們什麼時候想使用自定義迭代器？讓我們想像一個場景，我們有一個 <code>Server</code> 實例在不同的端口上運行不同的服務，如 <code>http</code> 和 <code>ssh</code>。其中一些服務處於 <code>active</code> 狀態，而其他服務則處於 <code>inactive</code> 狀態。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Server:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    services = [</span></span>
<span class="line"><span>        {&#39;active&#39;: False, &#39;protocol&#39;: &#39;ftp&#39;, &#39;port&#39;: 21},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;ssh&#39;, &#39;port&#39;: 22},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;http&#39;, &#39;port&#39;: 80},</span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>當我們遍歷 <code>Server</code> 實例時，我們只想遍歷那些處於 <code>active</code> 的服務。讓我們創建一個 <code>IterableServer</code> 類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class IterableServer:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.current_pos = 0</span></span>
<span class="line"><span>    def __next__(self):</span></span>
<span class="line"><span>        pass  # TODO: 實現並記得拋出 StopIteration</span></span></code></pre></div><p>首先，我們將當前位置初始化為 <code>0</code>。然後，我們定義一個 <code>__next__()</code> 方法來返回下一項。我們還將確保在沒有更多項返回時拋出 <code>StopIteration</code>。到目前為止都很好！現在，讓我們實現這個 <code>__next__()</code> 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class IterableServer:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.current_pos = 0.  # 我們初始化當前位置為 0</span></span>
<span class="line"><span>    def __iter__(self):  # 我們可以在這裏返回 self，因為實現了 __next__</span></span>
<span class="line"><span>        return self</span></span>
<span class="line"><span>    def __next__(self):</span></span>
<span class="line"><span>        while self.current_pos &lt; len(self.services):</span></span>
<span class="line"><span>            service = self.services[self.current_pos]</span></span>
<span class="line"><span>            self.current_pos += 1</span></span>
<span class="line"><span>            if service[&#39;active&#39;]:</span></span>
<span class="line"><span>                return service[&#39;protocol&#39;], service[&#39;port&#39;]</span></span>
<span class="line"><span>        raise StopIteration</span></span>
<span class="line"><span>    next = __next__  # 可選的 Python2 兼容性</span></span></code></pre></div><p>我們對列表中的服務進行遍歷，而當前的位置小於服務的個數，但只有在服務處於活動狀態時才返回。一旦我們遍歷完服務，就會拋出一個 <code>StopIteration</code> 異常。</p><p>因為我們實現了 <code>__next__()</code> 方法，當它耗盡時，它會拋出 <code>StopIteration</code>。我們可以從 <code>__iter__()</code> 返回 <code>self</code>，因為 <code>IterableServer</code> 類遵循 <code>iterable</code> 協議。</p><p>現在我們可以遍歷一個 <code>IterableServer</code> 實例，這將允許我們查看每個處於活動的服務，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; for protocol, port in IterableServer():</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        print(&#39;service %s is running on port %d&#39; % (protocol, port))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service ssh is running on port 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service http is running on port 21</span></span></code></pre></div>`,11)),a("p",null,[s[21]||(s[21]=n("太棒了，但我們可以做得更好！在這樣類似的實例中，我們的迭代器不需要維護大量的狀態，我們可以簡化代碼並使用 ",-1)),t(p,{href:"https://docs.python.org/3/library/stdtypes.html#generator-types"},{default:e(()=>[...s[20]||(s[20]=[n("generator（生成器）",-1)])]),_:1}),s[22]||(s[22]=n(" 來代替。",-1))]),s[127]||(s[127]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Server:</span></span>
<span class="line"><span>    services = [</span></span>
<span class="line"><span>        {&#39;active&#39;: False, &#39;protocol&#39;: &#39;ftp&#39;, &#39;port&#39;: 21},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;ssh&#39;, &#39;port&#39;: 22},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;http&#39;, &#39;port&#39;: 21},</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    def __iter__(self):</span></span>
<span class="line"><span>        for service in self.services:</span></span>
<span class="line"><span>            if service[&#39;active&#39;]:</span></span>
<span class="line"><span>                yield service[&#39;protocol&#39;], service[&#39;port&#39;]</span></span></code></pre></div>`,1)),a("p",null,[s[24]||(s[24]=a("code",null,"yield",-1)),s[25]||(s[25]=n(" 關鍵字到底是什麼？在定義生成器函數時使用 yield。這有點像 ",-1)),s[26]||(s[26]=a("code",null,"return",-1)),s[27]||(s[27]=n("，雖然 ",-1)),s[28]||(s[28]=a("code",null,"return",-1)),s[29]||(s[29]=n(" 在返回值後退出函數，但 ",-1)),s[30]||(s[30]=a("code",null,"yield",-1)),s[31]||(s[31]=n(" 會暫停執行直到下次調用它。這允許你的生成器的功能在它恢復之前保持狀態。查看 ",-1)),t(p,{href:"https://docs.python.org/3/reference/expressions.html#yieldexpr"},{default:e(()=>[...s[23]||(s[23]=[n("yield 的文檔",-1)])]),_:1}),s[32]||(s[32]=n("以瞭解更多信息。使用生成器，我們不必通過記住我們的位置來手動維護狀態。生成器只知道兩件事：它現在需要做什麼以及計算下一個項目需要做什麼。一旦我們到達執行點，即 ",-1)),s[33]||(s[33]=a("code",null,"yield",-1)),s[34]||(s[34]=n(" 不再被調用，我們就知道停止迭代。",-1))]),a("p",null,[s[37]||(s[37]=n("這是因為一些內置的 Python 魔法。在 ",-1)),t(p,{href:"https://docs.python.org/3/reference/datamodel.html#object.__iter__"},{default:e(()=>[...s[35]||(s[35]=[n("Python 關於 ",-1),a("code",null,"__iter__()",-1),n(" 的文檔",-1)])]),_:1}),s[38]||(s[38]=n("中我們可以看到，如果 ",-1)),s[39]||(s[39]=a("code",null,"__iter__()",-1)),s[40]||(s[40]=n(" 是作為一個生成器實現的，它將自動返回一個迭代器對象，該對象提供 ",-1)),s[41]||(s[41]=a("code",null,"__iter__()",-1)),s[42]||(s[42]=n(" 和 ",-1)),s[43]||(s[43]=a("code",null,"__next__()",-1)),s[44]||(s[44]=n(" 方法。閲讀這篇很棒的文章，深入瞭解",-1)),t(p,{href:"http://nvie.com/posts/iterators-vs-generators/"},{default:e(()=>[...s[36]||(s[36]=[n("迭代器，可迭代對象和生成器",-1)])]),_:1}),s[45]||(s[45]=n("。",-1))]),s[128]||(s[128]=l(`<h3 id="方法魔法" tabindex="-1">方法魔法 <a class="header-anchor" href="#方法魔法" aria-label="Permalink to “方法魔法”">​</a></h3><p>由於其獨特的方面，Python 提供了一些有趣的方法魔法作為語言的一部分。</p><p>其中一個例子是別名功能。因為函數只是對象，所以我們可以將它們賦值給多個變量。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; def foo():</span></span>
<span class="line"><span>       return &#39;foo&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; foo()</span></span>
<span class="line"><span>&#39;foo&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; bar = foo</span></span>
<span class="line"><span>&gt;&gt;&gt; bar()</span></span>
<span class="line"><span>&#39;foo&#39;</span></span></code></pre></div><p>我們稍後會看到它的作用。</p>`,5)),a("p",null,[s[47]||(s[47]=n("Python 提供了一個方便的內置函數",-1)),t(p,{href:"https://docs.python.org/3/library/functions.html#getattr"},{default:e(()=>[...s[46]||(s[46]=[n("稱為 ",-1),a("code",null,"getattr()",-1)])]),_:1}),s[48]||(s[48]=n("，它接受 ",-1)),s[49]||(s[49]=a("code",null,"object, name, default",-1)),s[50]||(s[50]=n(" 參數並在 ",-1)),s[51]||(s[51]=a("code",null,"object",-1)),s[52]||(s[52]=n(" 上返回屬性 ",-1)),s[53]||(s[53]=a("code",null,"name",-1)),s[54]||(s[54]=n("。這種編程方式允許我們訪問實例變量和方法。例如：",-1))]),s[129]||(s[129]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; class Dog:</span></span>
<span class="line"><span>        sound = &#39;Bark&#39;</span></span>
<span class="line"><span>        def speak(self):</span></span>
<span class="line"><span>            print(self.sound + &#39;!&#39;, self.sound + &#39;!&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; fido = Dog()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; fido.sound</span></span>
<span class="line"><span>&#39;Bark&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; getattr(fido, &#39;sound&#39;)</span></span>
<span class="line"><span>&#39;Bark&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; fido.speak</span></span>
<span class="line"><span>&lt;bound method Dog.speak of &lt;__main__.Dog object at 0x102db8828&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; getattr(fido, &#39;speak&#39;)</span></span>
<span class="line"><span>&lt;bound method Dog.speak of &lt;__main__.Dog object at 0x102db8828&gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; fido.speak()</span></span>
<span class="line"><span>Bark! Bark!</span></span>
<span class="line"><span>&gt;&gt;&gt; speak_method = getattr(fido, &#39;speak&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt; speak_method()</span></span>
<span class="line"><span>Bark! Bark!</span></span></code></pre></div><p>這是一個很酷的技巧，但是我們如何在實際中使用 <code>getattr</code> 呢？讓我們看一個例子，我們編寫一個小型命令列工具來動態處理命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Operations:</span></span>
<span class="line"><span>    def say_hi(self, name):</span></span>
<span class="line"><span>        print(&#39;Hello,&#39;, name)</span></span>
<span class="line"><span>    def say_bye(self, name):</span></span>
<span class="line"><span>        print (&#39;Goodbye,&#39;, name)</span></span>
<span class="line"><span>    def default(self, arg):</span></span>
<span class="line"><span>        print (&#39;This operation is not supported.&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    operations = Operations()</span></span>
<span class="line"><span>    # 假設我們做了錯誤處理</span></span>
<span class="line"><span>    command, argument = input(&#39;&gt; &#39;).split()</span></span>
<span class="line"><span>    func_to_call = getattr(operations, command, operations.default)</span></span>
<span class="line"><span>    func_to_call(argument)</span></span></code></pre></div><p>腳本的輸出是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python getattr.py</span></span>
<span class="line"><span>&gt; say_hi Nina</span></span>
<span class="line"><span>Hello, Nina</span></span>
<span class="line"><span>&gt; blah blah</span></span>
<span class="line"><span>This operation is not supported.</span></span></code></pre></div>`,5)),a("p",null,[s[56]||(s[56]=n("接下來，我們來看看 ",-1)),s[57]||(s[57]=a("code",null,"partial",-1)),s[58]||(s[58]=n("。例如，",-1)),s[59]||(s[59]=a("code",null,"functool.partial(func, *args, **kwargs)",-1)),s[60]||(s[60]=n(" 允許你返回一個新的 ",-1)),t(p,{href:"https://docs.python.org/3/library/functools.html#functools.partial"},{default:e(()=>[...s[55]||(s[55]=[n("partial 對象",-1)])]),_:1}),s[61]||(s[61]=l("，它的行為類似 <code>func</code>，參數是 <code>args</code> 和 <code>kwargs</code>。如果傳入更多的 <code>args</code>，它們會被附加到 <code>args</code>。如果傳入更多的 <code>kwargs</code>，它們會擴展並覆蓋 <code>kwargs</code>。讓我們通過一個簡短的例子來看看：",15))]),s[130]||(s[130]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; from functools import partial</span></span>
<span class="line"><span>&gt;&gt;&gt; basetwo = partial(int, base=2)</span></span>
<span class="line"><span>&gt;&gt;&gt; basetwo</span></span>
<span class="line"><span>&lt;functools.partial object at 0x1085a09f0&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; basetwo(&#39;10010&#39;)</span></span>
<span class="line"><span>18</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 這等同於</span></span>
<span class="line"><span>&gt;&gt;&gt; int(&#39;10010&#39;, base=2)</span></span></code></pre></div>`,1)),a("p",null,[s[63]||(s[63]=n("讓我們看看在我喜歡的一個",-1)),t(p,{href:"https://github.com/mozilla/agithub"},{default:e(()=>[...s[62]||(s[62]=[n("名為 ",-1),a("code",null,"agithub",-1)])]),_:1}),s[64]||(s[64]=n(" 的庫中的一些示例代碼中，這個方法魔術是如何結合在一起的，這是一個（名字起得很 low 的） REST API 客户端，它具有透明的語法，允許你以最小的配置快速構建任何 REST API 原型（不僅僅是 GitHub）。我發現這個項目很有趣，因為它非常強大，但只有大約 400 行 Python 代碼。你可以在大約 30 行配置代碼中添加對任何 REST API 的支持。",-1)),s[65]||(s[65]=a("code",null,"agithub",-1)),s[66]||(s[66]=n(" 知道協議所需的一切（",-1)),s[67]||(s[67]=a("code",null,"REST",-1)),s[68]||(s[68]=n("、",-1)),s[69]||(s[69]=a("code",null,"HTTP",-1)),s[70]||(s[70]=n("、",-1)),s[71]||(s[71]=a("code",null,"TCP",-1)),s[72]||(s[72]=n("），但它不考慮上游 API。讓我們深入到它的實現中。",-1))]),a("p",null,[s[74]||(s[74]=n("以下是我們如何為 GitHub API 和任何其他相關連接屬性定義端點 URL 的簡化版本。在這裏查看",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/master/agithub/GitHub.py"},{default:e(()=>[...s[73]||(s[73]=[n("完整代碼",-1)])]),_:1}),s[75]||(s[75]=n("。",-1))]),s[131]||(s[131]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class GitHub(API):</span></span>
<span class="line"><span>    def __init__(self, token=None, *args, **kwargs):</span></span>
<span class="line"><span>        props = ConnectionProperties(api_url = kwargs.pop(&#39;api_url&#39;, &#39;api.github.com&#39;))</span></span>
<span class="line"><span>        self.setClient(Client(*args, **kwargs))</span></span>
<span class="line"><span>        self.setConnectionProperties(props)</span></span></code></pre></div>`,1)),a("p",null,[s[78]||(s[78]=n("然後，一旦配置了",-1)),t(p,{href:"https://github.com/settings/tokens"},{default:e(()=>[...s[76]||(s[76]=[n("訪問令牌",-1)])]),_:1}),s[79]||(s[79]=n("，就可以開始使用 ",-1)),t(p,{href:"https://developer.github.com/v3/repos/#list-your-repositories"},{default:e(()=>[...s[77]||(s[77]=[n("GitHub API",-1)])]),_:1}),s[80]||(s[80]=n("。",-1))]),s[132]||(s[132]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; gh = GitHub(&#39;token&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt; status, data = gh.user.repos.get(visibility=&#39;public&#39;, sort=&#39;created&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt; # ^ 映射到 GET /user/repos</span></span>
<span class="line"><span>&gt;&gt;&gt; data</span></span>
<span class="line"><span>... [&#39;tweeter&#39;, &#39;snipey&#39;, &#39;...&#39;]</span></span></code></pre></div>`,1)),a("p",null,[s[82]||(s[82]=n("請注意，你要確保 URL 拼寫正確，因為我們沒有驗證 URL。如果 URL 不存在或出現了其他任何錯誤，將返回 API 拋出的錯誤。那麼，這一切是如何運作的呢？讓我們找出答案。首先，我們將查看一個 ",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/dbf7014e2504333c58a39153aa11bbbdd080f6ac/agithub/base.py#L30-L58"},{default:e(()=>[...s[81]||(s[81]=[a("code",null,"API",-1),n(" 類",-1)])]),_:1}),s[83]||(s[83]=n("的簡化示例：",-1))]),s[133]||(s[133]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class API:</span></span>
<span class="line"><span>    # ... other methods ...</span></span>
<span class="line"><span>    def __getattr__(self, key):</span></span>
<span class="line"><span>        return IncompleteRequest(self.client).__getattr__(key)</span></span>
<span class="line"><span>    __getitem__ = __getattr__</span></span></code></pre></div>`,1)),a("p",null,[s[85]||(s[85]=n("在 ",-1)),s[86]||(s[86]=a("code",null,"API",-1)),s[87]||(s[87]=n(" 類上的每次調用都會調用 ",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/dbf7014e2504333c58a39153aa11bbbdd080f6ac/agithub/base.py#L60-L100"},{default:e(()=>[...s[84]||(s[84]=[a("code",null,"IncompleteRequest",-1),n(" 類",-1)])]),_:1}),s[88]||(s[88]=n("作為指定的 ",-1)),s[89]||(s[89]=a("code",null,"key",-1)),s[90]||(s[90]=n("。",-1))]),s[134]||(s[134]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class IncompleteRequest:</span></span>
<span class="line"><span>    # ... other methods ...</span></span>
<span class="line"><span>    def __getattr__(self, key):</span></span>
<span class="line"><span>        if key in self.client.http_methods:</span></span>
<span class="line"><span>            htmlMethod = getattr(self.client, key)</span></span>
<span class="line"><span>            return partial(htmlMethod, url=self.url)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.url += &#39;/&#39; + str(key)</span></span>
<span class="line"><span>            return self</span></span>
<span class="line"><span>    __getitem__ = __getattr__</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Client:</span></span>
<span class="line"><span>    http_methods = (&#39;get&#39;)  # 還有 post, put, patch 等等。</span></span>
<span class="line"><span>    def get(self, url, headers={}, **params):</span></span>
<span class="line"><span>        return self.request(&#39;GET&#39;, url, None, headers)</span></span></code></pre></div>`,1)),a("p",null,[s[92]||(s[92]=n("如果最後一次調用不是 HTTP 方法（如 ",-1)),s[93]||(s[93]=a("code",null,"get",-1)),s[94]||(s[94]=n("、",-1)),s[95]||(s[95]=a("code",null,"post",-1)),s[96]||(s[96]=n(" 等），則返回帶有附加路徑的 ",-1)),s[97]||(s[97]=a("code",null,"IncompleteRequest",-1)),s[98]||(s[98]=n("。否則，它從",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/dbf7014e2504333c58a39153aa11bbbdd080f6ac/agithub/base.py#L102-L231"},{default:e(()=>[...s[91]||(s[91]=[a("code",null,"Client",-1),n(" 類",-1)])]),_:1}),s[99]||(s[99]=n("獲取 HTTP 方法對應的正確函數，並返回 ",-1)),s[100]||(s[100]=a("code",null,"partial",-1)),s[101]||(s[101]=n("。",-1))]),s[135]||(s[135]=l(`<p>如果我們給出一個不存在的路徑會發生什麼？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; status, data = this.path.doesnt.exist.get()</span></span>
<span class="line"><span>&gt;&gt;&gt; status</span></span>
<span class="line"><span>... 404</span></span></code></pre></div><p>因為 <code>__getattr__</code> 別名為 <code>__getitem__</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; owner, repo = &#39;nnja&#39;, &#39;tweeter&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; status, data = gh.repos[owner][repo].pulls.get()</span></span>
<span class="line"><span>&gt;&gt;&gt; # ^ Maps to GET /repos/nnja/tweeter/pulls</span></span>
<span class="line"><span>&gt;&gt;&gt; data</span></span>
<span class="line"><span>.... # {....}</span></span></code></pre></div><p>這真心是一些方法魔術！</p><h3 id="瞭解更多" tabindex="-1">瞭解更多 <a class="header-anchor" href="#瞭解更多" aria-label="Permalink to “瞭解更多”">​</a></h3>`,6)),a("p",null,[s[105]||(s[105]=n("Python 提供了大量工具，使你的代碼更優雅，更易於閲讀和理解。挑戰在於找到合適的工具來完成工作，但我希望本文為你的工具箱添加了一些新工具。而且，如果你想更進一步，你可以在我的Blog ",-1)),t(p,{href:"http://nnja.io"},{default:e(()=>[...s[102]||(s[102]=[n("nnja.io",-1)])]),_:1}),s[106]||(s[106]=n(" 上閲讀有關裝飾器、上下文管理器、上下文生成器和命名元組的內容。隨着你成為一名更好的 Python 開發人員，我鼓勵你到那裏閲讀一些設計良好的項目的源代碼。",-1)),t(p,{href:"https://github.com/requests/requests"},{default:e(()=>[...s[103]||(s[103]=[n("Requests",-1)])]),_:1}),s[107]||(s[107]=n(" 和 ",-1)),t(p,{href:"https://github.com/pallets/flask"},{default:e(()=>[...s[104]||(s[104]=[n("Flask",-1)])]),_:1}),s[108]||(s[108]=n(" 是兩個很好的起步的代碼庫。",-1))]),s[136]||(s[136]=a("hr",null,null,-1)),a("p",null,[s[110]||(s[110]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/18/4/elegant-solutions-everyday-python-problems"},{default:e(()=>[...s[109]||(s[109]=[n("https://opensource.com/article/18/4/elegant-solutions-everyday-python-problems",-1)])]),_:1})]),a("p",null,[s[115]||(s[115]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/nnja"},{default:e(()=>[...s[111]||(s[111]=[n("Nina Zakharenko",-1)])]),_:1}),s[116]||(s[116]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[112]||(s[112]=[n("lujun9972",-1)])]),_:1}),s[117]||(s[117]=n(" 譯者：",-1)),t(p,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[113]||(s[113]=[n("MjSeven",-1)])]),_:1}),s[118]||(s[118]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[114]||(s[114]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[121]||(s[121]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[119]||(s[119]=[n("LCTT",-1)])]),_:1}),s[122]||(s[122]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[120]||(s[120]=[n("Linux中國",-1)])]),_:1}),s[123]||(s[123]=n(" 榮譽推出",-1))])])}const T=i(g,[["render",u]]);export{c as __pageData,T as default};
