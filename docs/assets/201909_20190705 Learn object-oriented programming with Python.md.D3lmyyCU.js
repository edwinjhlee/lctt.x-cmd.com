import{_ as i,a0 as o,w as r,s as c,I as a,x as s,a1 as e,A as t,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"使用 Python 学习面对对象的编程 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 学习面对对象的编程 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 学习面对对象的编程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 学习面对对象的编程 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190705 Learn object-oriented programming with Python","title":"使用 Python 学习面对对象的编程","tag":"201909","desc":""},"relativePath":"201909/20190705 Learn object-oriented programming with Python.md","filePath":"[post].md"}'),d={name:"201909/20190705 Learn object-oriented programming with Python.md"};function u(h,n,g,f,m,y){const p=o("Link");return r(),c("div",null,[n[28]||(n[28]=a("h1",{id:"使用-python-学习面对对象的编程",tabindex:"-1"},[s("使用 Python 学习面对对象的编程 "),a("a",{class:"header-anchor",href:"#使用-python-学习面对对象的编程","aria-label":"Permalink to “使用 Python 学习面对对象的编程”"},"​")],-1)),n[29]||(n[29]=a("blockquote",null,[a("p",null,"使用 Python 类使你的代码变得更加模块化。")],-1)),n[30]||(n[30]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/08/091142y2bdbboctw7xdbjq.jpg",alt:""})],-1)),a("p",null,[n[1]||(n[1]=s("在我上一篇文章中，我解释了如何通过使用函数、创建模块或者两者一起来",-1)),e(p,{href:"https://linux.cn/article-11295-1.html"},{default:t(()=>[...n[0]||(n[0]=[s("使 Python 代码更加模块化",-1)])]),_:1}),n[2]||(n[2]=s("。函数对于避免重复多次使用的代码非常有用，而模块可以确保你在不同的项目中复用代码。但是模块化还有另一种方法：类。",-1))]),n[31]||(n[31]=l(`<p>如果你已经听过<ruby>面对对象编程<rt>object-oriented programming</rt></ruby>（OOP）这个术语，那么你可能会对类的用途有一些概念。程序员倾向于将类视为一个虚拟对象，有时与物理世界中的某些东西直接相关，有时则作为某种编程概念的表现形式。无论哪种表示，当你想要在程序中为你或程序的其他部分创建“对象”时，你都可以创建一个类来交互。</p><h3 id="没有类的模板" tabindex="-1">没有类的模板 <a class="header-anchor" href="#没有类的模板" aria-label="Permalink to “没有类的模板”">​</a></h3><p>假设你正在编写一个以幻想世界为背景的游戏，并且你需要这个应用程序能够涌现出各种坏蛋来给玩家的生活带来一些刺激。了解了很多关于函数的知识后，你可能会认为这听起来像是函数的一个教科书案例：需要经常重复的代码，但是在调用时可以考虑变量而只编写一次。</p><p>下面一个纯粹基于函数的敌人生成器实现的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def enemy(ancestry,gear):</span></span>
<span class="line"><span>    enemy=ancestry</span></span>
<span class="line"><span>    weapon=gear</span></span>
<span class="line"><span>    hp=random.randrange(0,20)</span></span>
<span class="line"><span>    ac=random.randrange(0,20)</span></span>
<span class="line"><span>    return [enemy,weapon,hp,ac]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def fight(tgt):</span></span>
<span class="line"><span>    print(&quot;You take a swing at the &quot; + tgt[0] + &quot;.&quot;)</span></span>
<span class="line"><span>    hit=random.randrange(0,20)</span></span>
<span class="line"><span>    if hit &gt; tgt[3]:</span></span>
<span class="line"><span>        print(&quot;You hit the &quot; + tgt[0] + &quot; for &quot; + str(hit) + &quot; damage!&quot;)</span></span>
<span class="line"><span>        tgt[2] = tgt[2] - hit</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        print(&quot;You missed.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>foe=enemy(&quot;troll&quot;,&quot;great axe&quot;)</span></span>
<span class="line"><span>print(&quot;You meet a &quot; + foe[0] + &quot; wielding a &quot; + foe[1])</span></span>
<span class="line"><span>print(&quot;Type the a key and then RETURN to attack.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    action=input()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if action.lower() == &quot;a&quot;:</span></span>
<span class="line"><span>        fight(foe)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if foe[2] &lt; 1:</span></span>
<span class="line"><span>        print(&quot;You killed your foe!&quot;)</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        print(&quot;The &quot; + foe[0] + &quot; has &quot; + str(foe[2]) + &quot; HP remaining&quot;)</span></span></code></pre></div><p><code>enemy</code> 函数创造了一个具有多个属性的敌人，例如谱系、武器、生命值和防御等级。它返回每个属性的列表，表示敌人全部特征。</p><p>从某种意义上说，这段代码创建了一个对象，即使它还没有使用类。程序员将这个 <code>enemy</code> 称为<em>对象</em>，因为该函数的结果（本例中是一个包含字符串和整数的列表）表示游戏中一个单独但复杂的<em>东西</em>。也就是说，列表中字符串和整数不是任意的：它们一起描述了一个虚拟对象。</p><p>在编写描述符集合时，你可以使用变量，以便随时使用它们来生成敌人。这有点像模板。</p><p>在示例代码中，当需要对象的属性时，会检索相应的列表项。例如，要获取敌人的谱系，代码会查询 <code>foe[0]</code>，对于生命值，会查询 <code>foe[2]</code>，以此类推。</p>`,9)),a("p",null,[n[4]||(n[4]=s("这种方法没有什么不妥，代码按预期运行。你可以添加更多不同类型的敌人，创建一个敌人类型列表，并在敌人创建期间从列表中随机选择，等等，它工作得很好。实际上，",-1)),e(p,{href:"https://opensource.com/article/17/4/how-program-games-raspberry-pi"},{default:t(()=>[...n[3]||(n[3]=[s("Lua",-1)])]),_:1}),n[5]||(n[5]=s(" 非常有效地利用这个原理来近似了一个面对对象模型。",-1))]),n[32]||(n[32]=l(`<p>然而，有时候对象不仅仅是属性列表。</p><h3 id="使用对象" tabindex="-1">使用对象 <a class="header-anchor" href="#使用对象" aria-label="Permalink to “使用对象”">​</a></h3><p>在 Python 中，一切都是对象。你在 Python 中创建的任何东西都是某个预定义模板的<em>实例</em>。甚至基本的字符串和整数都是 Python <code>type</code> 类的衍生物。你可以在这个交互式 Python shell 中见证：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; foo=3</span></span>
<span class="line"><span>&gt;&gt;&gt; type(foo)</span></span>
<span class="line"><span>&lt;class &#39;int&#39;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; foo=&quot;bar&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; type(foo)</span></span>
<span class="line"><span>&lt;class &#39;str&#39;&gt;</span></span></code></pre></div><p>当一个对象由一个类定义时，它不仅仅是一个属性的集合，Python 类具有各自的函数。从逻辑上讲，这很方便，因为只涉及某个对象类的操作包含在该对象的类中。</p><p>在示例代码中，<code>fight</code> 的代码是主应用程序的功能。这对于一个简单的游戏来说是可行的，但对于一个复杂的游戏来说，世界中不仅仅有玩家和敌人，还可能有城镇居民、牲畜、建筑物、森林等等，它们都不需要使用战斗功能。将战斗代码放在敌人的类中意味着你的代码更有条理，在一个复杂的应用程序中，这是一个重要的优势。</p><p>此外，每个类都有特权访问自己的本地变量。例如，敌人的生命值，除了某些功能之外，是不会改变的数据。游戏中的随机蝴蝶不应该意外地将敌人的生命值降低到 0。理想情况下，即使没有类，也不会发生这种情况。但是在具有大量活动部件的复杂应用程序中，确保不需要相互交互的部件永远不会发生这种情况，这是一个非常有用的技巧。</p><p>Python 类也受垃圾收集的影响。当不再使用类的实例时，它将被移出内存。你可能永远不知道这种情况会什么时候发生，但是你往往知道什么时候它不会发生，因为你的应用程序占用了更多的内存，而且运行速度比较慢。将数据集隔离到类中可以帮助 Python 跟踪哪些数据正在使用，哪些不在需要了。</p><h3 id="优雅的-python" tabindex="-1">优雅的 Python <a class="header-anchor" href="#优雅的-python" aria-label="Permalink to “优雅的 Python”">​</a></h3><p>下面是一个同样简单的战斗游戏，使用了 <code>Enemy</code> 类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy():</span></span>
<span class="line"><span>    def __init__(self,ancestry,gear):</span></span>
<span class="line"><span>        self.enemy=ancestry</span></span>
<span class="line"><span>        self.weapon=gear</span></span>
<span class="line"><span>        self.hp=random.randrange(10,20)</span></span>
<span class="line"><span>        self.ac=random.randrange(12,20)</span></span>
<span class="line"><span>        self.alive=True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def fight(self,tgt):</span></span>
<span class="line"><span>        print(&quot;You take a swing at the &quot; + self.enemy + &quot;.&quot;)</span></span>
<span class="line"><span>        hit=random.randrange(0,20)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.alive and hit &gt; self.ac:</span></span>
<span class="line"><span>            print(&quot;You hit the &quot; + self.enemy + &quot; for &quot; + str(hit) + &quot; damage!&quot;)</span></span>
<span class="line"><span>            self.hp = self.hp - hit</span></span>
<span class="line"><span>            print(&quot;The &quot; + self.enemy + &quot; has &quot; + str(self.hp) + &quot; HP remaining&quot;)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            print(&quot;You missed.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.hp &lt; 1:</span></span>
<span class="line"><span>            self.alive=False</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 游戏开始</span></span>
<span class="line"><span>foe=Enemy(&quot;troll&quot;,&quot;great axe&quot;)</span></span>
<span class="line"><span>print(&quot;You meet a &quot; + foe.enemy + &quot; wielding a &quot; + foe.weapon)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 主函数循环</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    print(&quot;Type the a key and then RETURN to attack.&quot;)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    action=input()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if action.lower() == &quot;a&quot;:</span></span>
<span class="line"><span>        foe.fight(foe)</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>    if foe.alive == False:</span></span>
<span class="line"><span>        print(&quot;You have won...this time.&quot;)</span></span>
<span class="line"><span>        exit()</span></span></code></pre></div><p>这个版本的游戏将敌人作为一个包含相同属性（谱系、武器、生命值和防御）的对象来处理，并添加一个新的属性来衡量敌人时候已被击败，以及一个战斗功能。</p>`,12)),a("p",null,[n[7]||(n[7]=s("类的第一个函数是一个特殊的函数，在 Python 中称为 ",-1)),n[8]||(n[8]=a("code",null,"init",-1)),n[9]||(n[9]=s(" 或初始化的函数。这类似于其他语言中的",-1)),e(p,{href:"https://opensource.com/article/19/6/what-java-constructor"},{default:t(()=>[...n[6]||(n[6]=[s("构造器",-1)])]),_:1}),n[10]||(n[10]=s("，它创建了类的一个实例，你可以通过它的属性和调用类时使用的任何变量来识别它（示例代码中的 ",-1)),n[11]||(n[11]=a("code",null,"foe",-1)),n[12]||(n[12]=s("）。",-1))]),n[33]||(n[33]=l(`<h3 id="self-和类实例" tabindex="-1">Self 和类实例 <a class="header-anchor" href="#self-和类实例" aria-label="Permalink to “Self 和类实例”">​</a></h3><p>类的函数接受一种你在类之外看不到的新形式的输入：<code>self</code>。如果不包含 <code>self</code>，那么当你调用类函数时，Python 无法知道要使用的类的<em>哪个</em>实例。这就像在一间充满兽人的房间里说：“我要和兽人战斗”，向一个兽人发起。没有人知道你指的是谁，所有兽人就都上来了。</p><p><img src="https://opensource.com/sites/default/files/images/orc-buch-opengameart_cc-by-sa.jpg" alt="Image of an Orc, CC-BY-SA by Buch on opengameart.org" title="CC-BY-SA by Buch on opengameart.org"></p><p><em>CC-BY-SA by Buch on opengameart.org</em></p><p>类中创建的每个属性都以 <code>self</code> 符号作为前缀，该符号将变量标识为类的属性。一旦派生出类的实例，就用表示该实例的变量替换掉 <code>self</code> 前缀。使用这个技巧，你可以在一间满是兽人的房间里说：“我要和谱系是 orc 的兽人战斗”，这样来挑战一个兽人。当 orc 听到 “gorblar.orc” 时，它就知道你指的是谁（他自己），所以你得到是一场公平的战斗而不是斗殴。在 Python 中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gorblar=Enemy(&quot;orc&quot;,&quot;sword&quot;)</span></span>
<span class="line"><span>print(&quot;The &quot; + gorblar.enemy + &quot; has &quot; + str(gorblar.hp) + &quot; remaining.&quot;)</span></span></code></pre></div><p>通过检索类属性（<code>gorblar.enemy</code> 或 <code>gorblar.hp</code> 或你需要的任何对象的任何值）而不是查询 <code>foe[0]</code>（在函数示例中）或 <code>gorblar[0]</code> 来寻找敌人。</p><h3 id="本地变量" tabindex="-1">本地变量 <a class="header-anchor" href="#本地变量" aria-label="Permalink to “本地变量”">​</a></h3><p>如果类中的变量没有以 <code>self</code> 关键字作为前缀，那么它就是一个局部变量，就像在函数中一样。例如，无论你做什么，你都无法访问 <code>Enemy.fight</code> 类之外的 <code>hit</code> 变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; print(foe.hit)</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./enclass.py&quot;, line 38, in &lt;module&gt;</span></span>
<span class="line"><span>    print(foe.hit)</span></span>
<span class="line"><span>AttributeError: &#39;Enemy&#39; object has no attribute &#39;hit&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; print(foe.fight.hit)</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./enclass.py&quot;, line 38, in &lt;module&gt;</span></span>
<span class="line"><span>    print(foe.fight.hit)</span></span>
<span class="line"><span>AttributeError: &#39;function&#39; object has no attribute &#39;hit&#39;</span></span></code></pre></div><p><code>hit</code> 变量包含在 Enemy 类中，并且只能“存活”到在战斗中发挥作用。</p><h3 id="更模块化" tabindex="-1">更模块化 <a class="header-anchor" href="#更模块化" aria-label="Permalink to “更模块化”">​</a></h3><p>本例使用与主应用程序相同的文本文档中的类。在一个复杂的游戏中，我们更容易将每个类看作是自己独立的应用程序。当多个开发人员处理同一个应用程序时，你会看到这一点：一个开发人员负责一个类，另一个开发人员负责主程序，只要他们彼此沟通这个类必须具有什么属性，就可以并行地开发这两个代码块。</p><p>要使这个示例游戏模块化，可以把它拆分为两个文件：一个用于主应用程序，另一个用于类。如果它是一个更复杂的应用程序，你可能每个类都有一个文件，或每个逻辑类组有一个文件（例如，用于建筑物的文件，用于自然环境的文件，用于敌人或 NPC 的文件等）。</p><p>将只包含 <code>Enemy</code> 类的一个文件保存为 <code>enemy.py</code>，将另一个包含其他内容的文件保存为 <code>main.py</code>。</p><p>以下是 <code>enemy.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy():</span></span>
<span class="line"><span>    def __init__(self,ancestry,gear):</span></span>
<span class="line"><span>        self.enemy=ancestry</span></span>
<span class="line"><span>        self.weapon=gear</span></span>
<span class="line"><span>        self.hp=random.randrange(10,20)</span></span>
<span class="line"><span>        self.stg=random.randrange(0,20)</span></span>
<span class="line"><span>        self.ac=random.randrange(0,20)</span></span>
<span class="line"><span>        self.alive=True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def fight(self,tgt):</span></span>
<span class="line"><span>        print(&quot;You take a swing at the &quot; + self.enemy + &quot;.&quot;)</span></span>
<span class="line"><span>        hit=random.randrange(0,20)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.alive and hit &gt; self.ac:</span></span>
<span class="line"><span>            print(&quot;You hit the &quot; + self.enemy + &quot; for &quot; + str(hit) + &quot; damage!&quot;)</span></span>
<span class="line"><span>            self.hp = self.hp - hit</span></span>
<span class="line"><span>            print(&quot;The &quot; + self.enemy + &quot; has &quot; + str(self.hp) + &quot; HP remaining&quot;)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            print(&quot;You missed.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.hp &lt; 1:</span></span>
<span class="line"><span>            self.alive=False</span></span></code></pre></div><p>以下是 <code>main.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import enemy as en</span></span>
<span class="line"><span></span></span>
<span class="line"><span># game start</span></span>
<span class="line"><span>foe=en.Enemy(&quot;troll&quot;,&quot;great axe&quot;)</span></span>
<span class="line"><span>print(&quot;You meet a &quot; + foe.enemy + &quot; wielding a &quot; + foe.weapon)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># main loop</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    print(&quot;Type the a key and then RETURN to attack.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    action=input()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if action.lower() == &quot;a&quot;:</span></span>
<span class="line"><span>        foe.fight(foe)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if foe.alive == False:</span></span>
<span class="line"><span>        print(&quot;You have won...this time.&quot;)</span></span>
<span class="line"><span>        exit()</span></span></code></pre></div><p>导入模块 <code>enemy.py</code> 使用了一条特别的语句，引用类文件名称而不用带有 <code>.py</code> 扩展名，后跟你选择的命名空间指示符（例如，<code>import enemy as en</code>）。这个指示符是在你调用类时在代码中使用的。你需要在导入时添加指示符，例如 <code>en.Enemy</code>，而不是只使用 <code>Enemy()</code>。</p><p>所有这些文件名都是任意的，尽管在原则上不要使用罕见的名称。将应用程序的中心命名为 <code>main.py</code> 是一个常见约定，和一个充满类的文件通常以小写形式命名，其中的类都以大写字母开头。是否遵循这些约定不会影响应用程序的运行方式，但它确实使经验丰富的 Python 程序员更容易快速理解应用程序的工作方式。</p><p>在如何构建代码方面有一些灵活性。例如，使用该示例代码，两个文件必须位于同一目录中。如果你只想将类打包为模块，那么必须创建一个名为 <code>mybad</code> 的目录，并将你的类移入其中。在 <code>main.py</code> 中，你的 <code>import</code> 语句稍有变化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mybad import enemy as en</span></span></code></pre></div><p>两种方法都会产生相同的结果，但如果你创建的类足够通用，你认为其他开发人员可以在他们的项目中使用它们，那么后者更好。</p><p>无论你选择哪种方式，都可以启动游戏的模块化版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./main.py </span></span>
<span class="line"><span>You meet a troll wielding a great axe</span></span>
<span class="line"><span>Type the a key and then RETURN to attack.</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>You take a swing at the troll.</span></span>
<span class="line"><span>You missed.</span></span>
<span class="line"><span>Type the a key and then RETURN to attack.</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>You take a swing at the troll.</span></span>
<span class="line"><span>You hit the troll for 8 damage!</span></span>
<span class="line"><span>The troll has 4 HP remaining</span></span>
<span class="line"><span>Type the a key and then RETURN to attack.</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>You take a swing at the troll.</span></span>
<span class="line"><span>You hit the troll for 11 damage!</span></span>
<span class="line"><span>The troll has -7 HP remaining</span></span>
<span class="line"><span>You have won...this time.</span></span></code></pre></div><p>游戏启动了，它现在更加模块化了。现在你知道了面对对象的应用程序意味着什么，但最重要的是，当你向兽人发起决斗的时候，你知道是哪一个。</p><hr>`,28)),a("p",null,[n[14]||(n[14]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/get-modular-python-classes"},{default:t(()=>[...n[13]||(n[13]=[s("https://opensource.com/article/19/7/get-modular-python-classes",-1)])]),_:1})]),a("p",null,[n[19]||(n[19]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:t(()=>[...n[15]||(n[15]=[s("Seth Kenlon",-1)])]),_:1}),n[20]||(n[20]=s(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...n[16]||(n[16]=[s("lujun9972",-1)])]),_:1}),n[21]||(n[21]=s(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:t(()=>[...n[17]||(n[17]=[s("MjSeven",-1)])]),_:1}),n[22]||(n[22]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...n[18]||(n[18]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[25]||(n[25]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...n[23]||(n[23]=[s("LCTT",-1)])]),_:1}),n[26]||(n[26]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...n[24]||(n[24]=[s("Linux中国",-1)])]),_:1}),n[27]||(n[27]=s(" 荣誉推出",-1))])])}const T=i(d,[["render",u]]);export{q as __pageData,T as default};
