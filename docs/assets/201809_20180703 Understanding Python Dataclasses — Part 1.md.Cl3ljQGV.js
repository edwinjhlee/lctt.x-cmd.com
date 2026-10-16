import{_ as i,a0 as d,w as o,s as c,ao as t,I as n,x as a,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"理解 Python 的 Dataclasses（一） | LCTT x X-CMD","titleTemplate":false,"description":"理解 Python 的 Dataclasses（一） | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"理解 Python 的 Dataclasses（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"理解 Python 的 Dataclasses（一） | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180703 Understanding Python Dataclasses — Part 1","title":"理解 Python 的 Dataclasses（一）","tag":"201809","desc":""},"relativePath":"201809/20180703 Understanding Python Dataclasses — Part 1.md","filePath":"[post].md"}'),r={name:"201809/20180703 Understanding Python Dataclasses — Part 1.md"};function g(h,s,u,b,k,_){const p=d("Link");return o(),c("div",null,[s[59]||(s[59]=t('<h1 id="理解-python-的-dataclasses-一" tabindex="-1">理解 Python 的 Dataclasses（一） <a class="header-anchor" href="#理解-python-的-dataclasses-一" aria-label="Permalink to “理解 Python 的 Dataclasses（一）”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/900/1*7pr8EL8EDsP296pxL7Wz_g.png" alt=""></p><p>如果你正在阅读本文，那么你已经意识到了 Python 3.7 以及它所包含的新特性。就我个人而言，我对 <code>Dataclasses</code> 感到非常兴奋，因为我等了它一段时间了。</p><p>本系列包含两部分：</p><ol><li>Dataclass 特点概述</li><li>在下一篇文章概述 Dataclass 的 <code>fields</code></li></ol><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h3><p><code>Dataclasses</code> 是 Python 的类（LCTT 译注：更准确的说，它是一个模块），适用于存储数据对象。你可能会问什么是数据对象？下面是定义数据对象的一个不太详细的特性列表：</p><ul><li>它们存储数据并代表某种数据类型。例如：一个数字。对于熟悉 ORM 的人来说，模型实例就是一个数据对象。它代表一种特定的实体。它包含那些定义或表示实体的属性。</li><li>它们可以与同一类型的其他对象进行比较。例如：一个数字可以是 <code>greater than</code>（大于）、<code>less than</code>（小于） 或 <code>equal</code>（等于） 另一个数字。</li></ul><p>当然还有更多的特性，但是这个列表足以帮助你理解问题的关键。</p><p>为了理解 <code>Dataclasses</code>，我们将实现一个包含数字的简单类，并允许我们执行上面提到的操作。</p><p>首先，我们将使用普通类，然后我们再使用 <code>Dataclasses</code> 来实现相同的结果。</p><p>但在我们开始之前，先来谈谈 <code>Dataclasses</code> 的用法。</p>',12)),n("p",null,[s[1]||(s[1]=a("Python 3.7 提供了一个装饰器 ",-1)),e(p,{href:"https://docs.python.org/3.7/library/dataclasses.html#dataclasses.dataclass"},{default:l(()=>[...s[0]||(s[0]=[a("dataclass",-1)])]),_:1}),s[2]||(s[2]=a("，用于将类转换为 ",-1)),s[3]||(s[3]=n("code",null,"dataclass",-1)),s[4]||(s[4]=a("。",-1))]),s[60]||(s[60]=t(`<p>你所要做的就是将类包在装饰器中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class A:</span></span>
<span class="line"><span> ...</span></span></code></pre></div><p>现在，让我们深入了解一下 <code>dataclass</code> 带给我们的变化和用途。</p><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to “初始化”">​</a></h3><p>通常是这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Number:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, val):</span></span>
<span class="line"><span>        self.val = val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; one = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; one.val</span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span></code></pre></div><p>用 <code>dataclass</code> 是这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val:int </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; one = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; one.val</span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span></code></pre></div><p>以下是 <code>dataclass</code> 装饰器带来的变化：</p>`,9)),n("ol",null,[s[12]||(s[12]=n("li",null,[a("无需定义 "),n("code",null,"__init__"),a("，然后将值赋给 "),n("code",null,"self"),a("，"),n("code",null,"dataclass"),a(" 负责处理它（LCTT 译注：此处原文可能有误，提及一个不存在的 "),n("code",null,"d"),a("）")],-1)),n("li",null,[s[6]||(s[6]=a("我们以更加易读的方式预先定义了成员属性，以及",-1)),e(p,{href:"https://stackoverflow.com/q/32557920/4333721"},{default:l(()=>[...s[5]||(s[5]=[a("类型提示",-1)])]),_:1}),s[7]||(s[7]=a("。我们现在立即能知道 ",-1)),s[8]||(s[8]=n("code",null,"val",-1)),s[9]||(s[9]=a(" 是 ",-1)),s[10]||(s[10]=n("code",null,"int",-1)),s[11]||(s[11]=a(" 类型。这无疑比一般定义类成员的方式更具可读性。",-1))])]),s[61]||(s[61]=t(`<blockquote><p>Python 之禅: 可读性很重要</p></blockquote><p>它也可以定义默认值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val:int = 0</span></span></code></pre></div><h3 id="表示" tabindex="-1">表示 <a class="header-anchor" href="#表示" aria-label="Permalink to “表示”">​</a></h3><p>对象表示指的是对象的一个有意义的字符串表示，它在调试时非常有用。</p><p>默认的 Python 对象表示不是很直观：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Number:</span></span>
<span class="line"><span>    def __init__(self, val = 0):</span></span>
<span class="line"><span>    self.val = val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>&gt;&gt;&gt; &lt;__main__.Number object at 0x7ff395b2ccc0&gt;</span></span></code></pre></div><p>这让我们无法知悉对象的作用，并且会导致糟糕的调试体验。</p><p>一个有意义的表示可以通过在类中定义一个 <code>__repr__</code> 方法来实现。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __repr__(self):</span></span>
<span class="line"><span>    return self.val</span></span></code></pre></div><p>现在我们得到这个对象有意义的表示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span></code></pre></div><p><code>dataclass</code> 会自动添加一个 <code>__repr__ </code> 函数，这样我们就不必手动实现它了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val: int = 0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>&gt;&gt;&gt; Number(val = 1)</span></span></code></pre></div><h3 id="数据比较" tabindex="-1">数据比较 <a class="header-anchor" href="#数据比较" aria-label="Permalink to “数据比较”">​</a></h3><p>通常，数据对象之间需要相互比较。</p><p>两个对象 <code>a</code> 和 <code>b</code> 之间的比较通常包括以下操作：</p><ul><li><code>a &lt; b</code></li><li><code>a &gt; b</code></li><li><code>a == b</code></li><li><code>a &gt;= b</code></li><li><code>a &lt;= b</code></li></ul>`,19)),n("p",null,[s[14]||(s[14]=a("在 Python 中，能够在可以执行上述操作的类中定义",-1)),e(p,{href:"https://docs.python.org/3/reference/datamodel.html#object.__lt__"},{default:l(()=>[...s[13]||(s[13]=[a("方法",-1)])]),_:1}),s[15]||(s[15]=a("。为了简单起见，不让这篇文章过于冗长，我将只展示 ",-1)),s[16]||(s[16]=n("code",null,"==",-1)),s[17]||(s[17]=a(" 和 ",-1)),s[18]||(s[18]=n("code",null,"<",-1)),s[19]||(s[19]=a(" 的实现。",-1))]),s[62]||(s[62]=t(`<p>通常这样写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Number:</span></span>
<span class="line"><span>    def __init__( self, val = 0):</span></span>
<span class="line"><span>       self.val = val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __eq__(self, other):</span></span>
<span class="line"><span>        return self.val == other.val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __lt__(self, other):</span></span>
<span class="line"><span>        return self.val &lt; other.val</span></span></code></pre></div><p>使用 <code>dataclass</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(order = True)</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val: int = 0</span></span></code></pre></div><p>是的，就是这样简单。</p><p>我们不需要定义 <code>__eq__</code> 和 <code>__lt__</code> 方法，因为当 <code>order = True</code> 被调用时，<code>dataclass</code> 装饰器会自动将它们添加到我们的类定义中。</p><p>那么，它是如何做到的呢？</p><p>当你使用 <code>dataclass</code> 时，它会在类定义中添加函数 <code>__eq__</code> 和 <code>__lt__</code> 。我们已经知道这点了。那么，这些函数是怎样知道如何检查相等并进行比较呢？</p><p>生成 <code>__eq__</code> 函数的 <code>dataclass</code> 类会比较两个属性构成的元组，一个由自己属性构成的，另一个由同类的其他实例的属性构成。在我们的例子中，<code>自动</code>生成的 <code>__eq__</code> 函数相当于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __eq__(self, other):</span></span>
<span class="line"><span>    return (self.val,) == (other.val,)</span></span></code></pre></div><p>让我们来看一个更详细的例子：</p><p>我们会编写一个 <code>dataclass</code> 类 <code>Person</code> 来保存 <code>name</code> 和 <code>age</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(order = True)</span></span>
<span class="line"><span>class Person:</span></span>
<span class="line"><span>    name: str</span></span>
<span class="line"><span>    age:int = 0</span></span></code></pre></div><p>自动生成的 <code>__eq__</code> 方法等同于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __eq__(self, other):</span></span>
<span class="line"><span>    return (self.name, self.age) == ( other.name, other.age)</span></span></code></pre></div><p>请注意属性的顺序。它们总是按照你在 <code>dataclass</code> 类中定义的顺序生成。</p><p>同样，等效的 <code>__le__</code> 函数类似于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __le__(self, other):</span></span>
<span class="line"><span>    return (self.name, self.age) &lt;= (other.name, other.age)</span></span></code></pre></div>`,18)),n("p",null,[s[21]||(s[21]=a("当你需要对数据对象列表进行排序时，通常会出现像 ",-1)),s[22]||(s[22]=n("code",null,"__le__",-1)),s[23]||(s[23]=a(" 这样的函数的定义。Python 内置的 ",-1)),e(p,{href:"https://docs.python.org/3.7/library/functions.html#sorted"},{default:l(()=>[...s[20]||(s[20]=[a("sorted",-1)])]),_:1}),s[24]||(s[24]=a(" 函数依赖于比较两个对象。",-1))]),s[63]||(s[63]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = [Number(random.randint(1,10)) for _ in range(10)] #generate list of random numbers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; [Number(val=2), Number(val=7), Number(val=6), Number(val=5), Number(val=10), Number(val=9), Number(val=1), Number(val=10), Number(val=1), Number(val=7)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; sorted_a = sorted(a) #Sort Numbers in ascending order</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; [Number(val=1), Number(val=1), Number(val=2), Number(val=5), Number(val=6), Number(val=7), Number(val=7), Number(val=9), Number(val=10), Number(val=10)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; reverse_sorted_a = sorted(a, reverse = True) #Sort Numbers in descending order </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; reverse_sorted_a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; [Number(val=10), Number(val=10), Number(val=9), Number(val=7), Number(val=7), Number(val=6), Number(val=5), Number(val=2), Number(val=1), Number(val=1)]</span></span></code></pre></div><h3 id="dataclass-作为一个可调用的装饰器" tabindex="-1"><code>dataclass</code> 作为一个可调用的装饰器 <a class="header-anchor" href="#dataclass-作为一个可调用的装饰器" aria-label="Permalink to “dataclass 作为一个可调用的装饰器”">​</a></h3><p>定义所有的 <code>dunder</code>（LCTT 译注：这是指双下划线方法，即魔法方法）方法并不总是值得的。你的用例可能只包括存储值和检查相等性。因此，你只需定义 <code>__init__</code> 和 <code>__eq__</code> 方法。如果我们可以告诉装饰器不生成其他方法，那么它会减少一些开销，并且我们将在数据对象上有正确的操作。</p><p>幸运的是，这可以通过将 <code>dataclass</code> 装饰器作为可调用对象来实现。</p>`,4)),n("p",null,[s[26]||(s[26]=a("从官方",-1)),e(p,{href:"https://docs.python.org/3/library/dataclasses.html#dataclasses.dataclass"},{default:l(()=>[...s[25]||(s[25]=[a("文档",-1)])]),_:1}),s[27]||(s[27]=a("来看，装饰器可以用作具有如下参数的可调用对象：",-1))]),s[64]||(s[64]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False)</span></span>
<span class="line"><span>class C:</span></span>
<span class="line"><span> …</span></span></code></pre></div><ol><li><code>init</code>：默认将生成 <code>__init__</code> 方法。如果传入 <code>False</code>，那么该类将不会有 <code>__init__</code> 方法。</li><li><code>repr</code>：<code>__repr__</code> 方法默认生成。如果传入 <code>False</code>，那么该类将不会有 <code>__repr__</code> 方法。</li><li><code>eq</code>：默认将生成 <code>__eq__</code> 方法。如果传入 <code>False</code>，那么 <code>__eq__</code> 方法将不会被 <code>dataclass</code> 添加，但默认为 <code>object.__eq__</code>。</li><li><code>order</code>：默认将生成 <code>__gt__</code>、<code>__ge__</code>、<code>__lt__</code>、<code>__le__</code> 方法。如果传入 <code>False</code>，则省略它们。</li></ol><p>我们在接下来会讨论 <code>frozen</code>。由于 <code>unsafe_hash</code> 参数复杂的用例，它值得单独发布一篇文章。</p><p>现在回到我们的用例，以下是我们需要的：</p><p>1. <code>__init__</code> 2. <code>__eq__</code></p><p>默认会生成这些函数，因此我们需要的是不生成其他函数。那么我们该怎么做呢？很简单，只需将相关参数作为 false 传入给生成器即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(repr = False) # order, unsafe_hash and frozen are False</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val: int = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; &lt;__main__.Number object at 0x7ff395afe898&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; b = Number(2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; c = Number(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a == b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a &lt; b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; Traceback (most recent call last):</span></span>
<span class="line"><span> File “&lt;stdin&gt;”, line 1, in &lt;module&gt;</span></span>
<span class="line"><span>TypeError: ‘&lt;’ not supported between instances of ‘Number’ and ‘Number’</span></span></code></pre></div><h3 id="frozen-不可变-实例" tabindex="-1">Frozen（不可变） 实例 <a class="header-anchor" href="#frozen-不可变-实例" aria-label="Permalink to “Frozen（不可变） 实例”">​</a></h3><p>Frozen 实例是在初始化对象后无法修改其属性的对象。</p><blockquote><p>无法创建真正不可变的 Python 对象</p></blockquote><p>在 Python 中创建对象的不可变属性是一项艰巨的任务，我将不会在本篇文章中深入探讨。</p><p>以下是我们期望不可变对象能够做到的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; a = Number(10) #Assuming Number class is immutable</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.val = 10 # Raises Error</span></span></code></pre></div><p>有了 <code>dataclass</code>，就可以通过使用 <code>dataclass</code> 装饰器作为可调用对象配合参数 <code>frozen=True</code> 来定义一个 <code>frozen</code> 对象。</p><p>当实例化一个 <code>frozen</code> 对象时，任何企图修改对象属性的行为都会引发 <code>FrozenInstanceError</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(frozen = True)</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val: int = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.val = 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; Traceback (most recent call last):</span></span>
<span class="line"><span> File “&lt;stdin&gt;”, line 1, in &lt;module&gt;</span></span>
<span class="line"><span> File “&lt;string&gt;”, line 3, in __setattr__</span></span>
<span class="line"><span>dataclasses.FrozenInstanceError: cannot assign to field ‘val’</span></span></code></pre></div><p>因此，一个 <code>frozen</code> 实例是一种很好方式来存储：</p><ul><li>常数</li><li>设置</li></ul><p>这些通常不会在应用程序的生命周期内发生变化，任何企图修改它们的行为都应该被禁止。</p><h3 id="后期初始化处理" tabindex="-1">后期初始化处理 <a class="header-anchor" href="#后期初始化处理" aria-label="Permalink to “后期初始化处理”">​</a></h3><p>有了 <code>dataclass</code>，需要定义一个 <code>__init__</code> 方法来将变量赋给 <code>self</code> 这种初始化操作已经得到了处理。但是我们失去了在变量被赋值之后立即需要的函数调用或处理的灵活性。</p><p>让我们来讨论一个用例，在这个用例中，我们定义一个 <code>Float</code> 类来包含浮点数，然后在初始化之后立即计算整数和小数部分。</p><p>通常是这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import math</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Float:</span></span>
<span class="line"><span>    def __init__(self, val = 0):</span></span>
<span class="line"><span>        self.val = val</span></span>
<span class="line"><span>        self.process()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def process(self):</span></span>
<span class="line"><span>        self.decimal, self.integer = math.modf(self.val)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = Float( 2.2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.decimal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 0.2000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.integer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 2.0</span></span></code></pre></div>`,24)),n("p",null,[s[29]||(s[29]=a("幸运的是，使用 ",-1)),e(p,{href:"https://docs.python.org/3/library/dataclasses.html#post-init-processing"},{default:l(()=>[...s[28]||(s[28]=[n("strong",null,"post_init",-1)])]),_:1}),s[30]||(s[30]=a("  方法已经能够处理后期初始化操作。",-1))]),s[65]||(s[65]=t(`<p>生成的 <code>__init__</code>  方法在返回之前调用 <code>__post_init__</code> 返回。因此，可以在函数中进行任何处理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import math</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class FloatNumber:</span></span>
<span class="line"><span>    val: float = 0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        self.decimal, self.integer = math.modf(self.val)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = Number(2.2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 2.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.integer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 2.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.decimal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 0.2</span></span></code></pre></div><p>多么方便！</p><h3 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to “继承”">​</a></h3><p><code>Dataclasses</code> 支持继承，就像普通的 Python 类一样。</p><p>因此，父类中定义的属性将在子类中可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Person:</span></span>
<span class="line"><span>    age: int = 0</span></span>
<span class="line"><span>    name: str</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Student(Person):</span></span>
<span class="line"><span>    grade: int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; s = Student(20, &quot;John Doe&quot;, 12)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; s.age</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; s.name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; &quot;John Doe&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; s.grade</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 12</span></span></code></pre></div><p>请注意，<code>Student</code> 的参数是在类中定义的字段的顺序。</p><p>继承过程中 <code>__post_init__</code> 的行为是怎样的？</p><p>由于 <code>__post_init__</code> 只是另一个函数，因此必须以传统方式调用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class A:</span></span>
<span class="line"><span>    a: int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        print(&quot;A&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class B(A):</span></span>
<span class="line"><span>    b: int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        print(&quot;B&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = B(1,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; B</span></span></code></pre></div><p>在上面的例子中，只有 <code>B</code> 的 <code>__post_init__</code> 被调用，那么我们如何调用 <code>A</code> 的 <code>__post_init__</code> 呢？</p><p>因为它是父类的函数，所以可以用 <code>super</code> 来调用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class B(A):</span></span>
<span class="line"><span>    b: int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        super().__post_init__() # 调用 A 的 post init</span></span>
<span class="line"><span>        print(&quot;B&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = B(1,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; A</span></span>
<span class="line"><span>    B</span></span></code></pre></div><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>因此，以上是 <code>dataclass</code> 使 Python 开发人员变得更轻松的几种方法。</p><p>我试着彻底覆盖大部分的用例，但是，没有人是完美的。如果你发现了错误，或者想让我注意相关的用例，请联系我。</p>`,17)),n("p",null,[s[32]||(s[32]=a("我将在另一篇文章中介绍 ",-1)),e(p,{href:"https://docs.python.org/3/library/dataclasses.html#dataclasses.field"},{default:l(()=>[...s[31]||(s[31]=[a("dataclasses.field",-1)])]),_:1}),s[33]||(s[33]=a(" 和 ",-1)),s[34]||(s[34]=n("code",null,"unsafe_hash",-1)),s[35]||(s[35]=a("。",-1))]),n("p",null,[s[38]||(s[38]=a("在 ",-1)),e(p,{href:"http://github.com/xssChauhan/"},{default:l(()=>[...s[36]||(s[36]=[a("Github",-1)])]),_:1}),s[39]||(s[39]=a(" 和 ",-1)),e(p,{href:"https://twitter.com/xssChauhan"},{default:l(()=>[...s[37]||(s[37]=[a("Twitter",-1)])]),_:1}),s[40]||(s[40]=a(" 关注我。",-1))]),n("p",null,[s[42]||(s[42]=a("更新：",-1)),s[43]||(s[43]=n("code",null,"dataclasses.field",-1)),s[44]||(s[44]=a(" 的文章可以在",-1)),e(p,{href:"https://medium.com/@xsschauhan/understanding-python-dataclasses-part-2-660ecc11c9b8"},{default:l(()=>[...s[41]||(s[41]=[a("这里",-1)])]),_:1}),s[45]||(s[45]=a("找到。",-1))]),s[66]||(s[66]=n("hr",null,null,-1)),n("p",null,[s[47]||(s[47]=a("via: ",-1)),e(p,{href:"https://medium.com/mindorks/understanding-python-dataclasses-part-1-c3ccd4355c34"},{default:l(()=>[...s[46]||(s[46]=[a("https://medium.com/mindorks/understanding-python-dataclasses-part-1-c3ccd4355c34",-1)])]),_:1})]),n("p",null,[s[51]||(s[51]=a("作者：",-1)),e(p,{href:"https://medium.com/@xsschauhan?source=post_header_lockup"},{default:l(()=>[...s[48]||(s[48]=[a("Shikhar Chauhan",-1)])]),_:1}),s[52]||(s[52]=a(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:l(()=>[...s[49]||(s[49]=[a("MjSeven",-1)])]),_:1}),s[53]||(s[53]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[50]||(s[50]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[56]||(s[56]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[54]||(s[54]=[a("LCTT",-1)])]),_:1}),s[57]||(s[57]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[55]||(s[55]=[a("Linux中国",-1)])]),_:1}),s[58]||(s[58]=a(" 荣誉推出",-1))])])}const y=i(r,[["render",g]]);export{v as __pageData,y as default};
