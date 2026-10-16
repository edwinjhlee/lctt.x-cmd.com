import{_ as i,a0 as o,w as r,s as d,ao as l,I as a,x as n,a1 as t,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"日常 Python 编程优雅之道 | LCTT x X-CMD","titleTemplate":false,"description":"日常 Python 编程优雅之道 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"日常 Python 编程优雅之道 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"日常 Python 编程优雅之道 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180430 3 practical Python tools- magic methods, iterators and generators, and method magic","title":"日常 Python 编程优雅之道","tag":"201807","desc":""},"relativePath":"201807/20180430 3 practical Python tools- magic methods, iterators and generators, and method magic.md","filePath":"[post].md"}'),g={name:"201807/20180430 3 practical Python tools- magic methods, iterators and generators, and method magic.md"};function u(b,s,f,k,h,y){const p=o("Link");return r(),d("div",null,[s[124]||(s[124]=l(`<h1 id="日常-python-编程优雅之道" tabindex="-1">日常 Python 编程优雅之道 <a class="header-anchor" href="#日常-python-编程优雅之道" aria-label="Permalink to “日常 Python 编程优雅之道”">​</a></h1><blockquote><p>3 个可以使你的 Python 代码更优雅、可读、直观和易于维护的工具。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/serving-bowl-forks-dinner.png?itok=a3YqPwr5" alt=""></p><p>Python 提供了一组独特的工具和语言特性来使你的代码更加优雅、可读和直观。为正确的问题选择合适的工具，你的代码将更易于维护。在本文中，我们将研究其中的三个工具：魔术方法、迭代器和生成器，以及方法魔术。</p><h3 id="魔术方法" tabindex="-1">魔术方法 <a class="header-anchor" href="#魔术方法" aria-label="Permalink to “魔术方法”">​</a></h3><p>魔术方法可以看作是 Python 的管道。它们被称为“底层”方法，用于某些内置的方法、符号和操作。你可能熟悉的常见魔术方法是 <code>__init__()</code>，当我们想要初始化一个类的新实例时，它会被调用。</p><p>你可能已经看过其他常见的魔术方法，如 <code>__str__</code> 和 <code>__repr__</code>。Python 中有一整套魔术方法，通过实现其中的一些方法，我们可以修改一个对象的行为，甚至使其行为类似于内置数据类型，例如数字、列表或字典。</p><p>让我们创建一个 <code>Money</code> 类来示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Money:</span></span>
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
<span class="line"><span>        return Money(self.symbol, new_amount)</span></span></code></pre></div><p>该类定义为给定的货币符号和汇率定义了一个货币汇率，指定了一个初始化器（也称为构造函数），并实现 <code>__repr__</code>，因此当我们打印这个类时，我们会看到一个友好的表示，例如 <code>$2.00</code> ，这是一个带有货币符号和金额的 <code>Money(&#39;$&#39;, 2.00)</code> 实例。最重要的是，它定义了一种方法，允许你使用不同的汇率在不同的货币之间进行转换。</p><p>打开 Python shell，假设我们已经定义了使用两种不同货币的食品的成本，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; soda_cost = Money(&#39;$&#39;, 5.25)</span></span>
<span class="line"><span>&gt;&gt;&gt; soda_cost</span></span>
<span class="line"><span>    $5.25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost = Money(&#39;€&#39;, 7.99)</span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost</span></span>
<span class="line"><span>    €7.99</span></span></code></pre></div><p>我们可以使用魔术方法使得这个类的实例之间可以相互交互。假设我们希望能够将这个类的两个实例一起加在一起，即使它们是不同的货币。为了实现这一点，我们可以在 <code>Money</code> 类上实现 <code>__add__</code> 这个魔术方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Money:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ... previously defined methods ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __add__(self, other):</span></span>
<span class="line"><span>        &quot;&quot;&quot; Add 2 Money instances using &#39;+&#39; &quot;&quot;&quot;</span></span>
<span class="line"><span>        new_amount = self.amount + self.convert(other).amount</span></span>
<span class="line"><span>        return Money(self.symbol, new_amount)</span></span></code></pre></div><p>现在我们可以以非常直观的方式使用这个类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; soda_cost = Money(&#39;$&#39;, 5.25)</span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost = Money(&#39;€&#39;, 7.99)</span></span>
<span class="line"><span>&gt;&gt;&gt; soda_cost + pizza_cost</span></span>
<span class="line"><span>    $14.33</span></span>
<span class="line"><span>&gt;&gt;&gt; pizza_cost + soda_cost</span></span>
<span class="line"><span>    €12.61</span></span></code></pre></div>`,16)),a("p",null,[s[2]||(s[2]=n("当我们将两个实例加在一起时，我们得到以第一个定义的货币符号所表示的结果。所有的转换都是在底层无缝完成的。如果我们想的话，我们也可以为减法实现 ",-1)),s[3]||(s[3]=a("code",null,"__sub__",-1)),s[4]||(s[4]=n("，为乘法实现 ",-1)),s[5]||(s[5]=a("code",null,"__mul__",-1)),s[6]||(s[6]=n(" 等等。阅读",-1)),t(p,{href:"https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types"},{default:e(()=>[...s[0]||(s[0]=[n("模拟数字类型",-1)])]),_:1}),s[7]||(s[7]=n("或",-1)),t(p,{href:"https://rszalski.github.io/magicmethods/"},{default:e(()=>[...s[1]||(s[1]=[n("魔术方法指南",-1)])]),_:1}),s[8]||(s[8]=n("来获得更多信息。",-1))]),s[125]||(s[125]=l(`<p>我们学习到 <code>__add__</code> 映射到内置运算符 <code>+</code>。其他魔术方法可以映射到像 <code>[]</code> 这样的符号。例如，在字典中通过索引或键来获得一项，其实是使用了 <code>__getitem__</code> 方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; d = {&#39;one&#39;: 1, &#39;two&#39;: 2}</span></span>
<span class="line"><span>&gt;&gt;&gt; d[&#39;two&#39;]</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>&gt;&gt;&gt; d.__getitem__(&#39;two&#39;)</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>一些魔术方法甚至映射到内置函数，例如 <code>__len__()</code> 映射到 <code>len()</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Alphabet:</span></span>
<span class="line"><span>    letters = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __len__(self):</span></span>
<span class="line"><span>        return len(self.letters)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; my_alphabet = Alphabet()</span></span>
<span class="line"><span>&gt;&gt;&gt; len(my_alphabet)</span></span>
<span class="line"><span>    26</span></span></code></pre></div><h3 id="自定义迭代器" tabindex="-1">自定义迭代器 <a class="header-anchor" href="#自定义迭代器" aria-label="Permalink to “自定义迭代器”">​</a></h3><p>对于新的和经验丰富的 Python 开发者来说，自定义迭代器是一个非常强大的但令人迷惑的主题。</p><p>许多内置类型，例如列表、集合和字典，已经实现了允许它们在底层迭代的协议。这使我们可以轻松地遍历它们。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; for food in [&#39;Pizza&#39;, &#39;Fries&#39;]:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         print(food + &#39;. Yum!&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pizza. Yum!</span></span>
<span class="line"><span>Fries. Yum!</span></span></code></pre></div><p>我们如何迭代我们自己的自定义类？首先，让我们来澄清一些术语。</p>`,9)),a("ul",null,[s[18]||(s[18]=a("li",null,[n("要成为一个可迭代对象，一个类需要实现 "),a("code",null,"__iter__()")],-1)),s[19]||(s[19]=a("li",null,[a("code",null,"__iter__()"),n(" 方法需要返回一个迭代器")],-1)),a("li",null,[s[10]||(s[10]=n("要成为一个迭代器，一个类需要实现 ",-1)),s[11]||(s[11]=a("code",null,"__next__()",-1)),s[12]||(s[12]=n("（或",-1)),t(p,{href:"https://docs.python.org/2/library/stdtypes.html#iterator.next"},{default:e(()=>[...s[9]||(s[9]=[n("在 Python 2",-1)])]),_:1}),s[13]||(s[13]=n("中是 ",-1)),s[14]||(s[14]=a("code",null,"next()",-1)),s[15]||(s[15]=n("），当没有更多的项要迭代时，必须抛出一个 ",-1)),s[16]||(s[16]=a("code",null,"StopIteration",-1)),s[17]||(s[17]=n(" 异常。",-1))])]),s[126]||(s[126]=l(`<p>呼！这听起来很复杂，但是一旦你记住了这些基本概念，你就可以在任何时候进行迭代。</p><p>我们什么时候想使用自定义迭代器？让我们想象一个场景，我们有一个 <code>Server</code> 实例在不同的端口上运行不同的服务，如 <code>http</code> 和 <code>ssh</code>。其中一些服务处于 <code>active</code> 状态，而其他服务则处于 <code>inactive</code> 状态。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Server:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    services = [</span></span>
<span class="line"><span>        {&#39;active&#39;: False, &#39;protocol&#39;: &#39;ftp&#39;, &#39;port&#39;: 21},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;ssh&#39;, &#39;port&#39;: 22},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;http&#39;, &#39;port&#39;: 80},</span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>当我们遍历 <code>Server</code> 实例时，我们只想遍历那些处于 <code>active</code> 的服务。让我们创建一个 <code>IterableServer</code> 类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class IterableServer:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.current_pos = 0</span></span>
<span class="line"><span>    def __next__(self):</span></span>
<span class="line"><span>        pass  # TODO: 实现并记得抛出 StopIteration</span></span></code></pre></div><p>首先，我们将当前位置初始化为 <code>0</code>。然后，我们定义一个 <code>__next__()</code> 方法来返回下一项。我们还将确保在没有更多项返回时抛出 <code>StopIteration</code>。到目前为止都很好！现在，让我们实现这个 <code>__next__()</code> 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class IterableServer:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.current_pos = 0.  # 我们初始化当前位置为 0</span></span>
<span class="line"><span>    def __iter__(self):  # 我们可以在这里返回 self，因为实现了 __next__</span></span>
<span class="line"><span>        return self</span></span>
<span class="line"><span>    def __next__(self):</span></span>
<span class="line"><span>        while self.current_pos &lt; len(self.services):</span></span>
<span class="line"><span>            service = self.services[self.current_pos]</span></span>
<span class="line"><span>            self.current_pos += 1</span></span>
<span class="line"><span>            if service[&#39;active&#39;]:</span></span>
<span class="line"><span>                return service[&#39;protocol&#39;], service[&#39;port&#39;]</span></span>
<span class="line"><span>        raise StopIteration</span></span>
<span class="line"><span>    next = __next__  # 可选的 Python2 兼容性</span></span></code></pre></div><p>我们对列表中的服务进行遍历，而当前的位置小于服务的个数，但只有在服务处于活动状态时才返回。一旦我们遍历完服务，就会抛出一个 <code>StopIteration</code> 异常。</p><p>因为我们实现了 <code>__next__()</code> 方法，当它耗尽时，它会抛出 <code>StopIteration</code>。我们可以从 <code>__iter__()</code> 返回 <code>self</code>，因为 <code>IterableServer</code> 类遵循 <code>iterable</code> 协议。</p><p>现在我们可以遍历一个 <code>IterableServer</code> 实例，这将允许我们查看每个处于活动的服务，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; for protocol, port in IterableServer():</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        print(&#39;service %s is running on port %d&#39; % (protocol, port))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service ssh is running on port 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service http is running on port 21</span></span></code></pre></div>`,11)),a("p",null,[s[21]||(s[21]=n("太棒了，但我们可以做得更好！在这样类似的实例中，我们的迭代器不需要维护大量的状态，我们可以简化代码并使用 ",-1)),t(p,{href:"https://docs.python.org/3/library/stdtypes.html#generator-types"},{default:e(()=>[...s[20]||(s[20]=[n("generator（生成器）",-1)])]),_:1}),s[22]||(s[22]=n(" 来代替。",-1))]),s[127]||(s[127]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Server:</span></span>
<span class="line"><span>    services = [</span></span>
<span class="line"><span>        {&#39;active&#39;: False, &#39;protocol&#39;: &#39;ftp&#39;, &#39;port&#39;: 21},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;ssh&#39;, &#39;port&#39;: 22},</span></span>
<span class="line"><span>        {&#39;active&#39;: True, &#39;protocol&#39;: &#39;http&#39;, &#39;port&#39;: 21},</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    def __iter__(self):</span></span>
<span class="line"><span>        for service in self.services:</span></span>
<span class="line"><span>            if service[&#39;active&#39;]:</span></span>
<span class="line"><span>                yield service[&#39;protocol&#39;], service[&#39;port&#39;]</span></span></code></pre></div>`,1)),a("p",null,[s[24]||(s[24]=a("code",null,"yield",-1)),s[25]||(s[25]=n(" 关键字到底是什么？在定义生成器函数时使用 yield。这有点像 ",-1)),s[26]||(s[26]=a("code",null,"return",-1)),s[27]||(s[27]=n("，虽然 ",-1)),s[28]||(s[28]=a("code",null,"return",-1)),s[29]||(s[29]=n(" 在返回值后退出函数，但 ",-1)),s[30]||(s[30]=a("code",null,"yield",-1)),s[31]||(s[31]=n(" 会暂停执行直到下次调用它。这允许你的生成器的功能在它恢复之前保持状态。查看 ",-1)),t(p,{href:"https://docs.python.org/3/reference/expressions.html#yieldexpr"},{default:e(()=>[...s[23]||(s[23]=[n("yield 的文档",-1)])]),_:1}),s[32]||(s[32]=n("以了解更多信息。使用生成器，我们不必通过记住我们的位置来手动维护状态。生成器只知道两件事：它现在需要做什么以及计算下一个项目需要做什么。一旦我们到达执行点，即 ",-1)),s[33]||(s[33]=a("code",null,"yield",-1)),s[34]||(s[34]=n(" 不再被调用，我们就知道停止迭代。",-1))]),a("p",null,[s[37]||(s[37]=n("这是因为一些内置的 Python 魔法。在 ",-1)),t(p,{href:"https://docs.python.org/3/reference/datamodel.html#object.__iter__"},{default:e(()=>[...s[35]||(s[35]=[n("Python 关于 ",-1),a("code",null,"__iter__()",-1),n(" 的文档",-1)])]),_:1}),s[38]||(s[38]=n("中我们可以看到，如果 ",-1)),s[39]||(s[39]=a("code",null,"__iter__()",-1)),s[40]||(s[40]=n(" 是作为一个生成器实现的，它将自动返回一个迭代器对象，该对象提供 ",-1)),s[41]||(s[41]=a("code",null,"__iter__()",-1)),s[42]||(s[42]=n(" 和 ",-1)),s[43]||(s[43]=a("code",null,"__next__()",-1)),s[44]||(s[44]=n(" 方法。阅读这篇很棒的文章，深入了解",-1)),t(p,{href:"http://nvie.com/posts/iterators-vs-generators/"},{default:e(()=>[...s[36]||(s[36]=[n("迭代器，可迭代对象和生成器",-1)])]),_:1}),s[45]||(s[45]=n("。",-1))]),s[128]||(s[128]=l(`<h3 id="方法魔法" tabindex="-1">方法魔法 <a class="header-anchor" href="#方法魔法" aria-label="Permalink to “方法魔法”">​</a></h3><p>由于其独特的方面，Python 提供了一些有趣的方法魔法作为语言的一部分。</p><p>其中一个例子是别名功能。因为函数只是对象，所以我们可以将它们赋值给多个变量。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; def foo():</span></span>
<span class="line"><span>       return &#39;foo&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; foo()</span></span>
<span class="line"><span>&#39;foo&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; bar = foo</span></span>
<span class="line"><span>&gt;&gt;&gt; bar()</span></span>
<span class="line"><span>&#39;foo&#39;</span></span></code></pre></div><p>我们稍后会看到它的作用。</p>`,5)),a("p",null,[s[47]||(s[47]=n("Python 提供了一个方便的内置函数",-1)),t(p,{href:"https://docs.python.org/3/library/functions.html#getattr"},{default:e(()=>[...s[46]||(s[46]=[n("称为 ",-1),a("code",null,"getattr()",-1)])]),_:1}),s[48]||(s[48]=n("，它接受 ",-1)),s[49]||(s[49]=a("code",null,"object, name, default",-1)),s[50]||(s[50]=n(" 参数并在 ",-1)),s[51]||(s[51]=a("code",null,"object",-1)),s[52]||(s[52]=n(" 上返回属性 ",-1)),s[53]||(s[53]=a("code",null,"name",-1)),s[54]||(s[54]=n("。这种编程方式允许我们访问实例变量和方法。例如：",-1))]),s[129]||(s[129]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; class Dog:</span></span>
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
<span class="line"><span>Bark! Bark!</span></span></code></pre></div><p>这是一个很酷的技巧，但是我们如何在实际中使用 <code>getattr</code> 呢？让我们看一个例子，我们编写一个小型命令行工具来动态处理命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Operations:</span></span>
<span class="line"><span>    def say_hi(self, name):</span></span>
<span class="line"><span>        print(&#39;Hello,&#39;, name)</span></span>
<span class="line"><span>    def say_bye(self, name):</span></span>
<span class="line"><span>        print (&#39;Goodbye,&#39;, name)</span></span>
<span class="line"><span>    def default(self, arg):</span></span>
<span class="line"><span>        print (&#39;This operation is not supported.&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    operations = Operations()</span></span>
<span class="line"><span>    # 假设我们做了错误处理</span></span>
<span class="line"><span>    command, argument = input(&#39;&gt; &#39;).split()</span></span>
<span class="line"><span>    func_to_call = getattr(operations, command, operations.default)</span></span>
<span class="line"><span>    func_to_call(argument)</span></span></code></pre></div><p>脚本的输出是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python getattr.py</span></span>
<span class="line"><span>&gt; say_hi Nina</span></span>
<span class="line"><span>Hello, Nina</span></span>
<span class="line"><span>&gt; blah blah</span></span>
<span class="line"><span>This operation is not supported.</span></span></code></pre></div>`,5)),a("p",null,[s[56]||(s[56]=n("接下来，我们来看看 ",-1)),s[57]||(s[57]=a("code",null,"partial",-1)),s[58]||(s[58]=n("。例如，",-1)),s[59]||(s[59]=a("code",null,"functool.partial(func, *args, **kwargs)",-1)),s[60]||(s[60]=n(" 允许你返回一个新的 ",-1)),t(p,{href:"https://docs.python.org/3/library/functools.html#functools.partial"},{default:e(()=>[...s[55]||(s[55]=[n("partial 对象",-1)])]),_:1}),s[61]||(s[61]=l("，它的行为类似 <code>func</code>，参数是 <code>args</code> 和 <code>kwargs</code>。如果传入更多的 <code>args</code>，它们会被附加到 <code>args</code>。如果传入更多的 <code>kwargs</code>，它们会扩展并覆盖 <code>kwargs</code>。让我们通过一个简短的例子来看看：",15))]),s[130]||(s[130]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; from functools import partial</span></span>
<span class="line"><span>&gt;&gt;&gt; basetwo = partial(int, base=2)</span></span>
<span class="line"><span>&gt;&gt;&gt; basetwo</span></span>
<span class="line"><span>&lt;functools.partial object at 0x1085a09f0&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; basetwo(&#39;10010&#39;)</span></span>
<span class="line"><span>18</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 这等同于</span></span>
<span class="line"><span>&gt;&gt;&gt; int(&#39;10010&#39;, base=2)</span></span></code></pre></div>`,1)),a("p",null,[s[63]||(s[63]=n("让我们看看在我喜欢的一个",-1)),t(p,{href:"https://github.com/mozilla/agithub"},{default:e(()=>[...s[62]||(s[62]=[n("名为 ",-1),a("code",null,"agithub",-1)])]),_:1}),s[64]||(s[64]=n(" 的库中的一些示例代码中，这个方法魔术是如何结合在一起的，这是一个（名字起得很 low 的） REST API 客户端，它具有透明的语法，允许你以最小的配置快速构建任何 REST API 原型（不仅仅是 GitHub）。我发现这个项目很有趣，因为它非常强大，但只有大约 400 行 Python 代码。你可以在大约 30 行配置代码中添加对任何 REST API 的支持。",-1)),s[65]||(s[65]=a("code",null,"agithub",-1)),s[66]||(s[66]=n(" 知道协议所需的一切（",-1)),s[67]||(s[67]=a("code",null,"REST",-1)),s[68]||(s[68]=n("、",-1)),s[69]||(s[69]=a("code",null,"HTTP",-1)),s[70]||(s[70]=n("、",-1)),s[71]||(s[71]=a("code",null,"TCP",-1)),s[72]||(s[72]=n("），但它不考虑上游 API。让我们深入到它的实现中。",-1))]),a("p",null,[s[74]||(s[74]=n("以下是我们如何为 GitHub API 和任何其他相关连接属性定义端点 URL 的简化版本。在这里查看",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/master/agithub/GitHub.py"},{default:e(()=>[...s[73]||(s[73]=[n("完整代码",-1)])]),_:1}),s[75]||(s[75]=n("。",-1))]),s[131]||(s[131]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class GitHub(API):</span></span>
<span class="line"><span>    def __init__(self, token=None, *args, **kwargs):</span></span>
<span class="line"><span>        props = ConnectionProperties(api_url = kwargs.pop(&#39;api_url&#39;, &#39;api.github.com&#39;))</span></span>
<span class="line"><span>        self.setClient(Client(*args, **kwargs))</span></span>
<span class="line"><span>        self.setConnectionProperties(props)</span></span></code></pre></div>`,1)),a("p",null,[s[78]||(s[78]=n("然后，一旦配置了",-1)),t(p,{href:"https://github.com/settings/tokens"},{default:e(()=>[...s[76]||(s[76]=[n("访问令牌",-1)])]),_:1}),s[79]||(s[79]=n("，就可以开始使用 ",-1)),t(p,{href:"https://developer.github.com/v3/repos/#list-your-repositories"},{default:e(()=>[...s[77]||(s[77]=[n("GitHub API",-1)])]),_:1}),s[80]||(s[80]=n("。",-1))]),s[132]||(s[132]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; gh = GitHub(&#39;token&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt; status, data = gh.user.repos.get(visibility=&#39;public&#39;, sort=&#39;created&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt; # ^ 映射到 GET /user/repos</span></span>
<span class="line"><span>&gt;&gt;&gt; data</span></span>
<span class="line"><span>... [&#39;tweeter&#39;, &#39;snipey&#39;, &#39;...&#39;]</span></span></code></pre></div>`,1)),a("p",null,[s[82]||(s[82]=n("请注意，你要确保 URL 拼写正确，因为我们没有验证 URL。如果 URL 不存在或出现了其他任何错误，将返回 API 抛出的错误。那么，这一切是如何运作的呢？让我们找出答案。首先，我们将查看一个 ",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/dbf7014e2504333c58a39153aa11bbbdd080f6ac/agithub/base.py#L30-L58"},{default:e(()=>[...s[81]||(s[81]=[a("code",null,"API",-1),n(" 类",-1)])]),_:1}),s[83]||(s[83]=n("的简化示例：",-1))]),s[133]||(s[133]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class API:</span></span>
<span class="line"><span>    # ... other methods ...</span></span>
<span class="line"><span>    def __getattr__(self, key):</span></span>
<span class="line"><span>        return IncompleteRequest(self.client).__getattr__(key)</span></span>
<span class="line"><span>    __getitem__ = __getattr__</span></span></code></pre></div>`,1)),a("p",null,[s[85]||(s[85]=n("在 ",-1)),s[86]||(s[86]=a("code",null,"API",-1)),s[87]||(s[87]=n(" 类上的每次调用都会调用 ",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/dbf7014e2504333c58a39153aa11bbbdd080f6ac/agithub/base.py#L60-L100"},{default:e(()=>[...s[84]||(s[84]=[a("code",null,"IncompleteRequest",-1),n(" 类",-1)])]),_:1}),s[88]||(s[88]=n("作为指定的 ",-1)),s[89]||(s[89]=a("code",null,"key",-1)),s[90]||(s[90]=n("。",-1))]),s[134]||(s[134]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class IncompleteRequest:</span></span>
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
<span class="line"><span>    http_methods = (&#39;get&#39;)  # 还有 post, put, patch 等等。</span></span>
<span class="line"><span>    def get(self, url, headers={}, **params):</span></span>
<span class="line"><span>        return self.request(&#39;GET&#39;, url, None, headers)</span></span></code></pre></div>`,1)),a("p",null,[s[92]||(s[92]=n("如果最后一次调用不是 HTTP 方法（如 ",-1)),s[93]||(s[93]=a("code",null,"get",-1)),s[94]||(s[94]=n("、",-1)),s[95]||(s[95]=a("code",null,"post",-1)),s[96]||(s[96]=n(" 等），则返回带有附加路径的 ",-1)),s[97]||(s[97]=a("code",null,"IncompleteRequest",-1)),s[98]||(s[98]=n("。否则，它从",-1)),t(p,{href:"https://github.com/mozilla/agithub/blob/dbf7014e2504333c58a39153aa11bbbdd080f6ac/agithub/base.py#L102-L231"},{default:e(()=>[...s[91]||(s[91]=[a("code",null,"Client",-1),n(" 类",-1)])]),_:1}),s[99]||(s[99]=n("获取 HTTP 方法对应的正确函数，并返回 ",-1)),s[100]||(s[100]=a("code",null,"partial",-1)),s[101]||(s[101]=n("。",-1))]),s[135]||(s[135]=l(`<p>如果我们给出一个不存在的路径会发生什么？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; status, data = this.path.doesnt.exist.get()</span></span>
<span class="line"><span>&gt;&gt;&gt; status</span></span>
<span class="line"><span>... 404</span></span></code></pre></div><p>因为 <code>__getattr__</code> 别名为 <code>__getitem__</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; owner, repo = &#39;nnja&#39;, &#39;tweeter&#39;</span></span>
<span class="line"><span>&gt;&gt;&gt; status, data = gh.repos[owner][repo].pulls.get()</span></span>
<span class="line"><span>&gt;&gt;&gt; # ^ Maps to GET /repos/nnja/tweeter/pulls</span></span>
<span class="line"><span>&gt;&gt;&gt; data</span></span>
<span class="line"><span>.... # {....}</span></span></code></pre></div><p>这真心是一些方法魔术！</p><h3 id="了解更多" tabindex="-1">了解更多 <a class="header-anchor" href="#了解更多" aria-label="Permalink to “了解更多”">​</a></h3>`,6)),a("p",null,[s[105]||(s[105]=n("Python 提供了大量工具，使你的代码更优雅，更易于阅读和理解。挑战在于找到合适的工具来完成工作，但我希望本文为你的工具箱添加了一些新工具。而且，如果你想更进一步，你可以在我的博客 ",-1)),t(p,{href:"http://nnja.io"},{default:e(()=>[...s[102]||(s[102]=[n("nnja.io",-1)])]),_:1}),s[106]||(s[106]=n(" 上阅读有关装饰器、上下文管理器、上下文生成器和命名元组的内容。随着你成为一名更好的 Python 开发人员，我鼓励你到那里阅读一些设计良好的项目的源代码。",-1)),t(p,{href:"https://github.com/requests/requests"},{default:e(()=>[...s[103]||(s[103]=[n("Requests",-1)])]),_:1}),s[107]||(s[107]=n(" 和 ",-1)),t(p,{href:"https://github.com/pallets/flask"},{default:e(()=>[...s[104]||(s[104]=[n("Flask",-1)])]),_:1}),s[108]||(s[108]=n(" 是两个很好的起步的代码库。",-1))]),s[136]||(s[136]=a("hr",null,null,-1)),a("p",null,[s[110]||(s[110]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/18/4/elegant-solutions-everyday-python-problems"},{default:e(()=>[...s[109]||(s[109]=[n("https://opensource.com/article/18/4/elegant-solutions-everyday-python-problems",-1)])]),_:1})]),a("p",null,[s[115]||(s[115]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/nnja"},{default:e(()=>[...s[111]||(s[111]=[n("Nina Zakharenko",-1)])]),_:1}),s[116]||(s[116]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[112]||(s[112]=[n("lujun9972",-1)])]),_:1}),s[117]||(s[117]=n(" 译者：",-1)),t(p,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[113]||(s[113]=[n("MjSeven",-1)])]),_:1}),s[118]||(s[118]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[114]||(s[114]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[121]||(s[121]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[119]||(s[119]=[n("LCTT",-1)])]),_:1}),s[122]||(s[122]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[120]||(s[120]=[n("Linux中国",-1)])]),_:1}),s[123]||(s[123]=n(" 荣誉推出",-1))])])}const T=i(g,[["render",u]]);export{c as __pageData,T as default};
