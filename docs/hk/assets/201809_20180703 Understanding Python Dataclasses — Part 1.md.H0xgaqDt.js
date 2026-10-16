import{_ as i,a0 as d,w as o,s as c,ao as t,I as n,x as a,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"理解 Python 的 Dataclasses（一） | LCTT x X-CMD","titleTemplate":false,"description":"理解 Python 的 Dataclasses（一） | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"理解 Python 的 Dataclasses（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"理解 Python 的 Dataclasses（一） | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180703 Understanding Python Dataclasses — Part 1","title":"理解 Python 的 Dataclasses（一）","tag":"201809","desc":""},"relativePath":"201809/20180703 Understanding Python Dataclasses — Part 1.md","filePath":"[post].md"}'),r={name:"201809/20180703 Understanding Python Dataclasses — Part 1.md"};function g(h,s,u,b,k,_){const p=d("Link");return o(),c("div",null,[s[59]||(s[59]=t('<h1 id="理解-python-的-dataclasses-一" tabindex="-1">理解 Python 的 Dataclasses（一） <a class="header-anchor" href="#理解-python-的-dataclasses-一" aria-label="Permalink to “理解 Python 的 Dataclasses（一）”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/900/1*7pr8EL8EDsP296pxL7Wz_g.png" alt=""></p><p>如果你正在閲讀本文，那麼你已經意識到了 Python 3.7 以及它所包含的新特性。就我個人而言，我對 <code>Dataclasses</code> 感到非常興奮，因為我等了它一段時間了。</p><p>本系列包含兩部分：</p><ol><li>Dataclass 特點概述</li><li>在下一篇文章概述 Dataclass 的 <code>fields</code></li></ol><h3 id="介紹" tabindex="-1">介紹 <a class="header-anchor" href="#介紹" aria-label="Permalink to “介紹”">​</a></h3><p><code>Dataclasses</code> 是 Python 的類（LCTT 譯註：更準確的説，它是一個模組），適用於存儲數據對象。你可能會問什麼是數據對象？下面是定義數據對象的一個不太詳細的特性列表：</p><ul><li>它們存儲數據並代表某種數據類型。例如：一個數字。對於熟悉 ORM 的人來説，模型實例就是一個數據對象。它代表一種特定的實體。它包含那些定義或表示實體的屬性。</li><li>它們可以與同一類型的其他對象進行比較。例如：一個數字可以是 <code>greater than</code>（大於）、<code>less than</code>（小於） 或 <code>equal</code>（等於） 另一個數字。</li></ul><p>當然還有更多的特性，但是這個列表足以幫助你理解問題的關鍵。</p><p>為了理解 <code>Dataclasses</code>，我們將實現一個包含數字的簡單類，並允許我們執行上面提到的操作。</p><p>首先，我們將使用普通類，然後我們再使用 <code>Dataclasses</code> 來實現相同的結果。</p><p>但在我們開始之前，先來談談 <code>Dataclasses</code> 的用法。</p>',12)),n("p",null,[s[1]||(s[1]=a("Python 3.7 提供了一個裝飾器 ",-1)),e(p,{href:"https://docs.python.org/3.7/library/dataclasses.html#dataclasses.dataclass"},{default:l(()=>[...s[0]||(s[0]=[a("dataclass",-1)])]),_:1}),s[2]||(s[2]=a("，用於將類轉換為 ",-1)),s[3]||(s[3]=n("code",null,"dataclass",-1)),s[4]||(s[4]=a("。",-1))]),s[60]||(s[60]=t(`<p>你所要做的就是將類包在裝飾器中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from dataclasses import dataclass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@dataclass</span></span>
<span class="line"><span>class A:</span></span>
<span class="line"><span> ...</span></span></code></pre></div><p>現在，讓我們深入瞭解一下 <code>dataclass</code> 帶給我們的變化和用途。</p><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to “初始化”">​</a></h3><p>通常是這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Number:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, val):</span></span>
<span class="line"><span>        self.val = val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; one = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; one.val</span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span></code></pre></div><p>用 <code>dataclass</code> 是這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val:int </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; one = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; one.val</span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span></code></pre></div><p>以下是 <code>dataclass</code> 裝飾器帶來的變化：</p>`,9)),n("ol",null,[s[12]||(s[12]=n("li",null,[a("無需定義 "),n("code",null,"__init__"),a("，然後將值賦給 "),n("code",null,"self"),a("，"),n("code",null,"dataclass"),a(" 負責處理它（LCTT 譯註：此處原文可能有誤，提及一個不存在的 "),n("code",null,"d"),a("）")],-1)),n("li",null,[s[6]||(s[6]=a("我們以更加易讀的方式預先定義了成員屬性，以及",-1)),e(p,{href:"https://stackoverflow.com/q/32557920/4333721"},{default:l(()=>[...s[5]||(s[5]=[a("類型提示",-1)])]),_:1}),s[7]||(s[7]=a("。我們現在立即能知道 ",-1)),s[8]||(s[8]=n("code",null,"val",-1)),s[9]||(s[9]=a(" 是 ",-1)),s[10]||(s[10]=n("code",null,"int",-1)),s[11]||(s[11]=a(" 類型。這無疑比一般定義類成員的方式更具可讀性。",-1))])]),s[61]||(s[61]=t(`<blockquote><p>Python 之禪: 可讀性很重要</p></blockquote><p>它也可以定義默認值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val:int = 0</span></span></code></pre></div><h3 id="表示" tabindex="-1">表示 <a class="header-anchor" href="#表示" aria-label="Permalink to “表示”">​</a></h3><p>對象表示指的是對象的一個有意義的字符串表示，它在調試時非常有用。</p><p>默認的 Python 對象表示不是很直觀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Number:</span></span>
<span class="line"><span>    def __init__(self, val = 0):</span></span>
<span class="line"><span>    self.val = val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>&gt;&gt;&gt; &lt;__main__.Number object at 0x7ff395b2ccc0&gt;</span></span></code></pre></div><p>這讓我們無法知悉對象的作用，並且會導致糟糕的調試體驗。</p><p>一個有意義的表示可以通過在類中定義一個 <code>__repr__</code> 方法來實現。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __repr__(self):</span></span>
<span class="line"><span>    return self.val</span></span></code></pre></div><p>現在我們得到這個對象有意義的表示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>&gt;&gt;&gt; 1</span></span></code></pre></div><p><code>dataclass</code> 會自動添加一個 <code>__repr__ </code> 函數，這樣我們就不必手動實現它了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val: int = 0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; a = Number(1)</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>&gt;&gt;&gt; Number(val = 1)</span></span></code></pre></div><h3 id="數據比較" tabindex="-1">數據比較 <a class="header-anchor" href="#數據比較" aria-label="Permalink to “數據比較”">​</a></h3><p>通常，數據對象之間需要相互比較。</p><p>兩個對象 <code>a</code> 和 <code>b</code> 之間的比較通常包括以下操作：</p><ul><li><code>a &lt; b</code></li><li><code>a &gt; b</code></li><li><code>a == b</code></li><li><code>a &gt;= b</code></li><li><code>a &lt;= b</code></li></ul>`,19)),n("p",null,[s[14]||(s[14]=a("在 Python 中，能夠在可以執行上述操作的類中定義",-1)),e(p,{href:"https://docs.python.org/3/reference/datamodel.html#object.__lt__"},{default:l(()=>[...s[13]||(s[13]=[a("方法",-1)])]),_:1}),s[15]||(s[15]=a("。為了簡單起見，不讓這篇文章過於冗長，我將只展示 ",-1)),s[16]||(s[16]=n("code",null,"==",-1)),s[17]||(s[17]=a(" 和 ",-1)),s[18]||(s[18]=n("code",null,"<",-1)),s[19]||(s[19]=a(" 的實現。",-1))]),s[62]||(s[62]=t(`<p>通常這樣寫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Number:</span></span>
<span class="line"><span>    def __init__( self, val = 0):</span></span>
<span class="line"><span>       self.val = val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __eq__(self, other):</span></span>
<span class="line"><span>        return self.val == other.val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __lt__(self, other):</span></span>
<span class="line"><span>        return self.val &lt; other.val</span></span></code></pre></div><p>使用 <code>dataclass</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(order = True)</span></span>
<span class="line"><span>class Number:</span></span>
<span class="line"><span>    val: int = 0</span></span></code></pre></div><p>是的，就是這樣簡單。</p><p>我們不需要定義 <code>__eq__</code> 和 <code>__lt__</code> 方法，因為當 <code>order = True</code> 被調用時，<code>dataclass</code> 裝飾器會自動將它們添加到我們的類定義中。</p><p>那麼，它是如何做到的呢？</p><p>當你使用 <code>dataclass</code> 時，它會在類定義中添加函數 <code>__eq__</code> 和 <code>__lt__</code> 。我們已經知道這點了。那麼，這些函數是怎樣知道如何檢查相等並進行比較呢？</p><p>生成 <code>__eq__</code> 函數的 <code>dataclass</code> 類會比較兩個屬性構成的元組，一個由自己屬性構成的，另一個由同類的其他實例的屬性構成。在我們的例子中，<code>自動</code>生成的 <code>__eq__</code> 函數相當於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __eq__(self, other):</span></span>
<span class="line"><span>    return (self.val,) == (other.val,)</span></span></code></pre></div><p>讓我們來看一個更詳細的例子：</p><p>我們會編寫一個 <code>dataclass</code> 類 <code>Person</code> 來保存 <code>name</code> 和 <code>age</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(order = True)</span></span>
<span class="line"><span>class Person:</span></span>
<span class="line"><span>    name: str</span></span>
<span class="line"><span>    age:int = 0</span></span></code></pre></div><p>自動生成的 <code>__eq__</code> 方法等同於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __eq__(self, other):</span></span>
<span class="line"><span>    return (self.name, self.age) == ( other.name, other.age)</span></span></code></pre></div><p>請注意屬性的順序。它們總是按照你在 <code>dataclass</code> 類中定義的順序生成。</p><p>同樣，等效的 <code>__le__</code> 函數類似於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def __le__(self, other):</span></span>
<span class="line"><span>    return (self.name, self.age) &lt;= (other.name, other.age)</span></span></code></pre></div>`,18)),n("p",null,[s[21]||(s[21]=a("當你需要對數據對象列表進行排序時，通常會出現像 ",-1)),s[22]||(s[22]=n("code",null,"__le__",-1)),s[23]||(s[23]=a(" 這樣的函數的定義。Python 內置的 ",-1)),e(p,{href:"https://docs.python.org/3.7/library/functions.html#sorted"},{default:l(()=>[...s[20]||(s[20]=[a("sorted",-1)])]),_:1}),s[24]||(s[24]=a(" 函數依賴於比較兩個對象。",-1))]),s[63]||(s[63]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import random</span></span>
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
<span class="line"><span>&gt;&gt;&gt; [Number(val=10), Number(val=10), Number(val=9), Number(val=7), Number(val=7), Number(val=6), Number(val=5), Number(val=2), Number(val=1), Number(val=1)]</span></span></code></pre></div><h3 id="dataclass-作為一個可調用的裝飾器" tabindex="-1"><code>dataclass</code> 作為一個可調用的裝飾器 <a class="header-anchor" href="#dataclass-作為一個可調用的裝飾器" aria-label="Permalink to “dataclass 作為一個可調用的裝飾器”">​</a></h3><p>定義所有的 <code>dunder</code>（LCTT 譯註：這是指雙下劃線方法，即魔法方法）方法並不總是值得的。你的用例可能只包括存儲值和檢查相等性。因此，你只需定義 <code>__init__</code> 和 <code>__eq__</code> 方法。如果我們可以告訴裝飾器不生成其他方法，那麼它會減少一些開銷，並且我們將在數據對象上有正確的操作。</p><p>幸運的是，這可以通過將 <code>dataclass</code> 裝飾器作為可調用對象來實現。</p>`,4)),n("p",null,[s[26]||(s[26]=a("從官方",-1)),e(p,{href:"https://docs.python.org/3/library/dataclasses.html#dataclasses.dataclass"},{default:l(()=>[...s[25]||(s[25]=[a("文檔",-1)])]),_:1}),s[27]||(s[27]=a("來看，裝飾器可以用作具有如下參數的可調用對象：",-1))]),s[64]||(s[64]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False)</span></span>
<span class="line"><span>class C:</span></span>
<span class="line"><span> …</span></span></code></pre></div><ol><li><code>init</code>：默認將生成 <code>__init__</code> 方法。如果傳入 <code>False</code>，那麼該類將不會有 <code>__init__</code> 方法。</li><li><code>repr</code>：<code>__repr__</code> 方法默認生成。如果傳入 <code>False</code>，那麼該類將不會有 <code>__repr__</code> 方法。</li><li><code>eq</code>：默認將生成 <code>__eq__</code> 方法。如果傳入 <code>False</code>，那麼 <code>__eq__</code> 方法將不會被 <code>dataclass</code> 添加，但默認為 <code>object.__eq__</code>。</li><li><code>order</code>：默認將生成 <code>__gt__</code>、<code>__ge__</code>、<code>__lt__</code>、<code>__le__</code> 方法。如果傳入 <code>False</code>，則省略它們。</li></ol><p>我們在接下來會討論 <code>frozen</code>。由於 <code>unsafe_hash</code> 參數複雜的用例，它值得單獨發佈一篇文章。</p><p>現在回到我們的用例，以下是我們需要的：</p><p>1. <code>__init__</code> 2. <code>__eq__</code></p><p>默認會生成這些函數，因此我們需要的是不生成其他函數。那麼我們該怎麼做呢？很簡單，只需將相關參數作為 false 傳入給生成器即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(repr = False) # order, unsafe_hash and frozen are False</span></span>
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
<span class="line"><span>TypeError: ‘&lt;’ not supported between instances of ‘Number’ and ‘Number’</span></span></code></pre></div><h3 id="frozen-不可變-實例" tabindex="-1">Frozen（不可變） 實例 <a class="header-anchor" href="#frozen-不可變-實例" aria-label="Permalink to “Frozen（不可變） 實例”">​</a></h3><p>Frozen 實例是在初始化對象後無法修改其屬性的對象。</p><blockquote><p>無法創建真正不可變的 Python 對象</p></blockquote><p>在 Python 中創建對象的不可變屬性是一項艱鉅的任務，我將不會在本篇文章中深入探討。</p><p>以下是我們期望不可變對象能夠做到的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; a = Number(10) #Assuming Number class is immutable</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a.val = 10 # Raises Error</span></span></code></pre></div><p>有了 <code>dataclass</code>，就可以通過使用 <code>dataclass</code> 裝飾器作為可調用對象配合參數 <code>frozen=True</code> 來定義一個 <code>frozen</code> 對象。</p><p>當實例化一個 <code>frozen</code> 對象時，任何企圖修改對象屬性的行為都會引發 <code>FrozenInstanceError</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass(frozen = True)</span></span>
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
<span class="line"><span>dataclasses.FrozenInstanceError: cannot assign to field ‘val’</span></span></code></pre></div><p>因此，一個 <code>frozen</code> 實例是一種很好方式來存儲：</p><ul><li>常數</li><li>設置</li></ul><p>這些通常不會在應用程序的生命週期內發生變化，任何企圖修改它們的行為都應該被禁止。</p><h3 id="後期初始化處理" tabindex="-1">後期初始化處理 <a class="header-anchor" href="#後期初始化處理" aria-label="Permalink to “後期初始化處理”">​</a></h3><p>有了 <code>dataclass</code>，需要定義一個 <code>__init__</code> 方法來將變量賦給 <code>self</code> 這種初始化操作已經得到了處理。但是我們失去了在變量被賦值之後立即需要的函數調用或處理的靈活性。</p><p>讓我們來討論一個用例，在這個用例中，我們定義一個 <code>Float</code> 類來包含浮點數，然後在初始化之後立即計算整數和小數部分。</p><p>通常是這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import math</span></span>
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
<span class="line"><span>&gt;&gt;&gt; 2.0</span></span></code></pre></div>`,24)),n("p",null,[s[29]||(s[29]=a("幸運的是，使用 ",-1)),e(p,{href:"https://docs.python.org/3/library/dataclasses.html#post-init-processing"},{default:l(()=>[...s[28]||(s[28]=[n("strong",null,"post_init",-1)])]),_:1}),s[30]||(s[30]=a("  方法已經能夠處理後期初始化操作。",-1))]),s[65]||(s[65]=t(`<p>生成的 <code>__init__</code>  方法在返回之前調用 <code>__post_init__</code> 返回。因此，可以在函數中進行任何處理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import math</span></span>
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
<span class="line"><span>&gt;&gt;&gt; 0.2</span></span></code></pre></div><p>多麼方便！</p><h3 id="繼承" tabindex="-1">繼承 <a class="header-anchor" href="#繼承" aria-label="Permalink to “繼承”">​</a></h3><p><code>Dataclasses</code> 支持繼承，就像普通的 Python 類一樣。</p><p>因此，父類中定義的屬性將在子類中可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
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
<span class="line"><span>&gt;&gt;&gt; 12</span></span></code></pre></div><p>請注意，<code>Student</code> 的參數是在類中定義的字段的順序。</p><p>繼承過程中 <code>__post_init__</code> 的行為是怎樣的？</p><p>由於 <code>__post_init__</code> 只是另一個函數，因此必須以傳統方式調用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
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
<span class="line"><span>&gt;&gt;&gt; B</span></span></code></pre></div><p>在上面的例子中，只有 <code>B</code> 的 <code>__post_init__</code> 被調用，那麼我們如何調用 <code>A</code> 的 <code>__post_init__</code> 呢？</p><p>因為它是父類的函數，所以可以用 <code>super</code> 來調用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class B(A):</span></span>
<span class="line"><span>    b: int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __post_init__(self):</span></span>
<span class="line"><span>        super().__post_init__() # 調用 A 的 post init</span></span>
<span class="line"><span>        print(&quot;B&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; a = B(1,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; A</span></span>
<span class="line"><span>    B</span></span></code></pre></div><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>因此，以上是 <code>dataclass</code> 使 Python 開發人員變得更輕鬆的幾種方法。</p><p>我試着徹底覆蓋大部分的用例，但是，沒有人是完美的。如果你發現了錯誤，或者想讓我注意相關的用例，請聯繫我。</p>`,17)),n("p",null,[s[32]||(s[32]=a("我將在另一篇文章中介紹 ",-1)),e(p,{href:"https://docs.python.org/3/library/dataclasses.html#dataclasses.field"},{default:l(()=>[...s[31]||(s[31]=[a("dataclasses.field",-1)])]),_:1}),s[33]||(s[33]=a(" 和 ",-1)),s[34]||(s[34]=n("code",null,"unsafe_hash",-1)),s[35]||(s[35]=a("。",-1))]),n("p",null,[s[38]||(s[38]=a("在 ",-1)),e(p,{href:"http://github.com/xssChauhan/"},{default:l(()=>[...s[36]||(s[36]=[a("Github",-1)])]),_:1}),s[39]||(s[39]=a(" 和 ",-1)),e(p,{href:"https://twitter.com/xssChauhan"},{default:l(()=>[...s[37]||(s[37]=[a("Twitter",-1)])]),_:1}),s[40]||(s[40]=a(" 關注我。",-1))]),n("p",null,[s[42]||(s[42]=a("更新：",-1)),s[43]||(s[43]=n("code",null,"dataclasses.field",-1)),s[44]||(s[44]=a(" 的文章可以在",-1)),e(p,{href:"https://medium.com/@xsschauhan/understanding-python-dataclasses-part-2-660ecc11c9b8"},{default:l(()=>[...s[41]||(s[41]=[a("這裏",-1)])]),_:1}),s[45]||(s[45]=a("找到。",-1))]),s[66]||(s[66]=n("hr",null,null,-1)),n("p",null,[s[47]||(s[47]=a("via: ",-1)),e(p,{href:"https://medium.com/mindorks/understanding-python-dataclasses-part-1-c3ccd4355c34"},{default:l(()=>[...s[46]||(s[46]=[a("https://medium.com/mindorks/understanding-python-dataclasses-part-1-c3ccd4355c34",-1)])]),_:1})]),n("p",null,[s[51]||(s[51]=a("作者：",-1)),e(p,{href:"https://medium.com/@xsschauhan?source=post_header_lockup"},{default:l(()=>[...s[48]||(s[48]=[a("Shikhar Chauhan",-1)])]),_:1}),s[52]||(s[52]=a(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:l(()=>[...s[49]||(s[49]=[a("MjSeven",-1)])]),_:1}),s[53]||(s[53]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[50]||(s[50]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[56]||(s[56]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[54]||(s[54]=[a("LCTT",-1)])]),_:1}),s[57]||(s[57]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[55]||(s[55]=[a("Linux中國",-1)])]),_:1}),s[58]||(s[58]=a(" 榮譽推出",-1))])])}const y=i(r,[["render",g]]);export{v as __pageData,y as default};
