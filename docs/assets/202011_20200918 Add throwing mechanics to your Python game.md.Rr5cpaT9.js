import{_ as i,a0 as t,w as r,s as c,I as a,x as n,a1 as l,A as e,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"在你的 Python 游戏中添加投掷机制 | LCTT x X-CMD","titleTemplate":false,"description":"在你的 Python 游戏中添加投掷机制 | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在你的 Python 游戏中添加投掷机制 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在你的 Python 游戏中添加投掷机制 | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20200918 Add throwing mechanics to your Python game","title":"在你的 Python 游戏中添加投掷机制","tag":"202011","desc":""},"relativePath":"202011/20200918 Add throwing mechanics to your Python game.md","filePath":"[post].md"}'),f={name:"202011/20200918 Add throwing mechanics to your Python game.md"};function d(g,s,y,m,u,h){const p=t("Link");return r(),c("div",null,[s[42]||(s[42]=a("h1",{id:"在你的-python-游戏中添加投掷机制",tabindex:"-1"},[n("在你的 Python 游戏中添加投掷机制 "),a("a",{class:"header-anchor",href:"#在你的-python-游戏中添加投掷机制","aria-label":"Permalink to “在你的 Python 游戏中添加投掷机制”"},"​")],-1)),s[43]||(s[43]=a("blockquote",null,[a("p",null,"四处奔跑躲避敌人是一回事，反击敌人是另一回事。学习如何在这系列的第十二篇文章中在 Pygame 中创建平台游戏。")],-1)),s[44]||(s[44]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202011/30/124457xcj9mztw9kx9c7zj.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("这是仍在进行中的关于使用 ",-1)),l(p,{href:"https://www.pygame.org/news"},{default:e(()=>[...s[0]||(s[0]=[n("Pygame",-1)])]),_:1}),s[3]||(s[3]=n(" 模块在 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[1]||(s[1]=[n("Python 3",-1)])]),_:1}),s[4]||(s[4]=n(" 中创建电脑游戏的第十二部分。先前的文章是：",-1))]),a("ol",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[5]||(s[5]=[n("通过构建一个简单的掷骰子游戏去学习怎么用 Python 编程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[6]||(s[6]=[n("使用 Python 和 Pygame 模块构建一个游戏框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[7]||(s[7]=[n("如何在你的 Python 游戏中添加一个玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("用 Pygame 使你的游戏角色移动起来",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("如何向你的 Python 游戏中添加一个敌人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("在 Pygame 游戏中放置平台",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("在你的 Python 游戏中模拟引力",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11790-1.html"},{default:e(()=>[...s[12]||(s[12]=[n("为你的 Python 平台类游戏添加跳跃功能",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11819-1.html"},{default:e(()=>[...s[13]||(s[13]=[n("使你的 Python 游戏玩家能够向前和向后跑",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11828-1.html"},{default:e(()=>[...s[14]||(s[14]=[n("在你的 Python 平台类游戏中放一些奖励",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11839-1.html"},{default:e(()=>[...s[15]||(s[15]=[n("添加计分到你的 Python 游戏",-1)])]),_:1})])]),s[45]||(s[45]=a("p",null,"我的上一篇文章本来是这一系列文章的最后一篇，它鼓励你为这个游戏编写自己的附加程序。你们很多人都这么做了！我收到了一些电子邮件，要求帮助我还没有涵盖的常用机制：战斗。毕竟，跳起来躲避坏人是一回事，但是有时候让他们走开是一件非常令人满意的事。在电脑游戏中向你的敌人投掷一些物品是很常见的，不管是一个火球、一支箭、一道闪电，还是其它适合游戏的东西。",-1)),s[46]||(s[46]=a("p",null,[n("与迄今为止你在这个系列中为你的平台游戏编程的任何东西不同，可投掷物品有一个"),a("em",null,"生存时间"),n("。在你投掷一个物品后，它会如期在移动一段距离后消失。如果它是一支箭或其它类似的东西，它可能会在通过屏幕的边缘时而消失。如果它是一个火球或一道闪电，它可能会在一段时间后熄灭。")],-1)),s[47]||(s[47]=a("p",null,"这意味着每次生成一个可投掷的物品时，也必须生成一个独特的衡量其生存时间的标准。为了介绍这个概念，这篇文章演示如何一次只投掷一个物品。（换句话说，每次仅存在一个投掷物品）。 一方面，这是一个游戏的限制条件，但另一方面，它却是游戏本身的运行机制。你的玩家不能每次同时投掷 50 个火球，因为每次仅允许一个投掷物品，所以当你的玩家释放一个火球来尝试击中一名敌人就成为了一项挑战。而在幕后，这也使你的代码保持简单。",-1)),s[48]||(s[48]=a("p",null,"如果你想启用每次投掷多个项目，在完成这篇教程后，通过学习这篇教程所获取的知识来挑战你自己。",-1)),s[49]||(s[49]=a("h3",{id:"创建-throwable-类",tabindex:"-1"},[n("创建 Throwable 类 "),a("a",{class:"header-anchor",href:"#创建-throwable-类","aria-label":"Permalink to “创建 Throwable 类”"},"​")],-1)),a("p",null,[s[18]||(s[18]=n("如果你跟随学习这系列的其它文章，那么你应该熟悉在屏幕上生成一个新的对象基础的 ",-1)),s[19]||(s[19]=a("code",null,"__init__",-1)),s[20]||(s[20]=n(" 函数。这和你用来生成你的 ",-1)),l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[16]||(s[16]=[n("玩家",-1)])]),_:1}),s[21]||(s[21]=n(" 和 ",-1)),l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[17]||(s[17]=[n("敌人",-1)])]),_:1}),s[22]||(s[22]=n(" 的函数是一样的。这里是生成一个 ",-1)),s[23]||(s[23]=a("code",null,"throwable",-1)),s[24]||(s[24]=n(" 对象的 ",-1)),s[25]||(s[25]=a("code",null,"__init__",-1)),s[26]||(s[26]=n(" 函数来：",-1))]),s[50]||(s[50]=o(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Throwable(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    生成一个 throwable 对象</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    def __init__(self, x, y, img, throw):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect   = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.firing = throw</span></span></code></pre></div><p>同你的 <code>Player</code> 类或 <code>Enemy</code> 类的 <code>__init__</code> 函数相比，这个函数的主要区别是，它有一个 <code>self.firing</code> 变量。这个变量保持跟踪一个投掷的物品是否在当前屏幕上活动，因此当一个 <code>throwable</code> 对象创建时，将变量设置为 <code>1</code> 的合乎情理的。</p><h3 id="判断存活时间" tabindex="-1">判断存活时间 <a class="header-anchor" href="#判断存活时间" aria-label="Permalink to “判断存活时间”">​</a></h3><p>接下来，就像使用 <code>Player</code> 和 <code>Enemy</code> 一样，你需要一个 <code>update</code> 函数，以便投掷的物品在瞄准敌人抛向空中时，它会自己移动。</p><p>测定一个投掷的物品存活时间的最简单方法是侦测它何时离开屏幕。你需要监视的屏幕边缘取决于你投掷的物品的物理特性。</p><ul><li>如果你的玩家正在投掷的物品是沿着水平轴快速移动的，像一只弩箭或箭或一股非常快的魔法力量，而你想监视你游戏屏幕的水平轴极限。这可以通过 <code>worldx</code> 定义。</li><li>如果你的玩家正在投掷的物品是沿着垂直方向或同时沿着水平方向和垂直方向移动的，那么你必须监视你游戏屏幕的垂直轴极限。这可以通过 <code>worldy</code> 定义。</li></ul><p>这个示例假设你投掷的物品向前移动一点并最终落到地面上。不过，投掷的物品不会从地面上反弹起来，而是继续掉落出屏幕。你可以尝试不同的设置来看看什么最适合你的游戏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def update(self,worldy):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        投掷物理学</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        if self.rect.y &lt; worldy:   #垂直轴 </span></span>
<span class="line"><span>            self.rect.x  += 15     #它向前移动的速度有多快</span></span>
<span class="line"><span>            self.rect.y  += 5      #它掉落的速度有多快</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.kill()            #移除投掷对象</span></span>
<span class="line"><span>            self.firing = 0        #解除火力发射</span></span></code></pre></div><p>为使你的投掷物品移动地更快，增加 <code>self.rect</code> 的动量值。</p><p>如果投掷物品不在屏幕上，那么该物品将被销毁，以及释放其所占用的寄存器。另外，<code>self.firing</code> 将被设置回 <code>0</code> 以允许你的玩家来进行另一次射击。</p><h3 id="设置你的投掷对象" tabindex="-1">设置你的投掷对象 <a class="header-anchor" href="#设置你的投掷对象" aria-label="Permalink to “设置你的投掷对象”">​</a></h3><p>就像使用你的玩家和敌人一样，你必须在你的设置部分中创建一个精灵组来保持投掷对象。</p><p>此外，你必须创建一个非活动的投掷对象来供开始的游戏使用。如果在游戏开始时却没有一个投掷对象，那么玩家在第一次尝试投掷一柄武器时，投掷将失败。</p><p>这个示例假设你的玩家使用一个火球作为开始的武器，因此，每一个投掷实例都是由 <code>fire</code> 变量指派的。在后面的关卡中，当玩家获取新的技能时，你可以使用相同的 <code>Throwable</code> 类来引入一个新的变量以使用一张不同的图像。</p><p>在这代码块中，前两行已经在你的代码中，因此不要重新键入它们:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>player_list = pygame.sprite.Group() #上下文</span></span>
<span class="line"><span>player_list.add(player)             #上下文</span></span>
<span class="line"><span>fire = Throwable(player.rect.x,player.rect.y,&#39;fire.png&#39;,0)</span></span>
<span class="line"><span>firepower = pygame.sprite.Group()</span></span></code></pre></div><p>注意，每一个投掷对象的起始位置都是和玩家所在的位置相同。这使得它看起来像是投掷对象来自玩家。在第一个火球生成时，使用 <code>0</code> 来显示 <code>self.firing</code> 是可用的。</p><h3 id="在主循环中获取投掷行为" tabindex="-1">在主循环中获取投掷行为 <a class="header-anchor" href="#在主循环中获取投掷行为" aria-label="Permalink to “在主循环中获取投掷行为”">​</a></h3><p>没有在主循环中出现的代码不会在游戏中使用，因此你需要在你的主循环中添加一些东西，以便能在你的游戏世界中获取投掷对象。</p><p>首先，添加玩家控制。当前，你没有火力触发器。在键盘上的按键是有两种状态的：释放的按键，按下的按键。为了移动，你要使用这两种状态：按下按键来启动玩家移动，释放按键来停止玩家移动。开火仅需要一个信号。你使用哪个按键事件（按键按下或按键释放）来触发你的投掷对象取决于你的品味。</p><p>在这个代码语句块中，前两行是用于上下文的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(platform_list)</span></span>
<span class="line"><span>            if event.key == pygame.K_SPACE:</span></span>
<span class="line"><span>                if not fire.firing:</span></span>
<span class="line"><span>                    fire = Throwable(player.rect.x,player.rect.y,&#39;fire.png&#39;,1)</span></span>
<span class="line"><span>                    firepower.add(fire)</span></span></code></pre></div><p>与你在设置部分创建的火球不同，你使用一个 <code>1</code> 来设置 <code>self.firing</code> 为不可用。</p><p>最后，你必须更新和绘制你的投掷物品。这个顺序很重要，因此把这段代码放置到你现有的 <code>enemy.move</code> 和 <code>player_list.draw</code> 的代码行之间：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    enemy.move()  # 上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if fire.firing:</span></span>
<span class="line"><span>        fire.update(worldy)</span></span>
<span class="line"><span>        firepower.draw(world)</span></span>
<span class="line"><span>    player_list.draw(screen)  # 上下文</span></span>
<span class="line"><span>    enemy_list.draw(screen)   # 上下文</span></span></code></pre></div><p>注意，这些更新仅在 <code>self.firing</code> 变量被设置为 1 时执行。如果它被设置为 0 ，那么 <code>fire.firing</code> 就不为 <code>true</code>，接下来就跳过更新。如果你尝试做上述这些更新，不管怎样，你的游戏都会崩溃，因为在游戏中将不会更新或绘制一个 <code>fire</code> 对象。</p><p>启动你的游戏，尝试挑战你的武器。</p><h3 id="检测碰撞" tabindex="-1">检测碰撞 <a class="header-anchor" href="#检测碰撞" aria-label="Permalink to “检测碰撞”">​</a></h3><p>如果你玩使用了新投掷技巧的游戏，你可能会注意到，你可以投掷对象，但是它却不会对你的敌人有任何影响。</p><p>原因是你的敌人没有被查到碰撞事故。一名敌人可能会被你的投掷物品所击中，但是敌人却从来不知道被击中了。</p><p>你已经在你的 <code>Player</code> 类中完成了碰撞检测，这非常类似。在你的 <code>Enemy</code> 类中，添加一个新的 <code>update</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def update(self,firepower, enemy_list):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        检测火力碰撞</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        fire_hit_list = pygame.sprite.spritecollide(self,firepower,False)</span></span>
<span class="line"><span>        for fire in fire_hit_list:</span></span>
<span class="line"><span>            enemy_list.remove(self)</span></span></code></pre></div><p>代码很简单。每个敌人对象都检查并看看它自己是否被 <code>firepower</code> 精灵组的成员所击中。如果它被击中，那么敌人就会从敌人组中移除和消失。</p><p>为集成这些功能到你的游戏之中，在主循环中调用位于新触发语句块中的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    if fire.firing:                             # 上下文</span></span>
<span class="line"><span>        fire.update(worldy)                     # 上下文</span></span>
<span class="line"><span>        firepower.draw(screen)                  # 上下文</span></span>
<span class="line"><span>        enemy_list.update(firepower,enemy_list) # 更新敌人</span></span></code></pre></div><p>你现在可以尝试一下你的游戏了，大多数的事情都如预期般的那样工作。不过，这里仍然有一个问题，那就是投掷的方向。</p><h3 id="更改投掷机制的方向" tabindex="-1">更改投掷机制的方向 <a class="header-anchor" href="#更改投掷机制的方向" aria-label="Permalink to “更改投掷机制的方向”">​</a></h3><p>当前，你英雄的火球只会向右移动。这是因为 <code>Throwable</code> 类的 <code>update</code> 函数将像素添加到火球的位置，在 Pygame 中，在 X 轴上一个较大的数字意味着向屏幕的右侧移动。当你的英雄转向另一个方向时，你可能希望它投掷的火球也抛向左侧。</p><p>到目前为止，你已经知道如何实现这一点，至少在技术上是这样的。然而，最简单的解决方案却是使用一个变量，在一定程度上对你来说可能是一种新的方法。一般来说，你可以“设置一个标记”（有时也被称为“翻转一个位”）来标明你的英雄所面向的方向。在你做完后，你就可以检查这个变量来得知火球是向左移动还是向右移动。</p><p>首先，在你的 <code>Player</code> 类中创建一个新的变量来代表你的游戏所面向的方向。因为我的游戏天然地面向右侧，由此我把面向右侧作为默认值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.score = 0</span></span>
<span class="line"><span>        self.facing_right = True  # 添加这行</span></span>
<span class="line"><span>        self.is_jumping = True</span></span></code></pre></div><p>当这个变量是 <code>True</code> 时，你的英雄精灵是面向右侧的。当玩家每次更改英雄的方向时，变量也必须重新设置，因此，在你的主循环中相关的 <code>keyup</code> 事件中这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps, 0)</span></span>
<span class="line"><span>                player.facing_right = False  # 添加这行</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps, 0)</span></span>
<span class="line"><span>                player.facing_right = True   # 添加这行</span></span></code></pre></div><p>最后，更改你的 <code>Throwable</code> 类的 <code>update</code> 函数，以检测英雄是否面向右侧，并恰当地添加或减去来自火球位置的像素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.rect.y &lt; worldy:</span></span>
<span class="line"><span>            if player.facing_right:</span></span>
<span class="line"><span>                self.rect.x += 15</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.x -= 15</span></span>
<span class="line"><span>            self.rect.y += 5</span></span></code></pre></div><p>再次尝试你的游戏，清除掉你游戏世界中的一些坏人。</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-throw.jpg" alt="Python 平台类使用投掷能力" title="Python platformer with throwing capability"></p><p>作为一项额外的挑战，当彻底打败敌人时，尝试增加你玩家的得分。</p><h3 id="完整的代码" tabindex="-1">完整的代码 <a class="header-anchor" href="#完整的代码" aria-label="Permalink to “完整的代码”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># 作者: Seth Kenlon</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GPLv3</span></span>
<span class="line"><span># This program is free software: you can redistribute it and/or</span></span>
<span class="line"><span># modify it under the terms of the GNU General Public License as</span></span>
<span class="line"><span># published by the Free Software Foundation, either version 3 of the</span></span>
<span class="line"><span># License, or (at your option) any later version.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># This program is distributed in the hope that it will be useful, but</span></span>
<span class="line"><span># WITHOUT ANY WARRANTY; without even the implied warranty of</span></span>
<span class="line"><span># MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU</span></span>
<span class="line"><span># General Public License for more details.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># You should have received a copy of the GNU General Public License</span></span>
<span class="line"><span># along with this program.  If not, see &lt;[http://www.gnu.org/licenses/&gt;][17].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>import pygame.freetype</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>变量</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span>fps = 40</span></span>
<span class="line"><span>ani = 4</span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx, worldy])</span></span>
<span class="line"><span>forwardx  = 600</span></span>
<span class="line"><span>backwardx = 120</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE = (80, 80, 155)</span></span>
<span class="line"><span>BLACK = (23, 23, 23)</span></span>
<span class="line"><span>WHITE = (254, 254, 254)</span></span>
<span class="line"><span>ALPHA = (0, 255, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tx = 64</span></span>
<span class="line"><span>ty = 64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>font_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), &quot;fonts&quot;, &quot;amazdoom.ttf&quot;)</span></span>
<span class="line"><span>font_size = tx</span></span>
<span class="line"><span>pygame.freetype.init()</span></span>
<span class="line"><span>myfont = pygame.freetype.Font(font_path, font_size)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>对象</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def stats(score, health):</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 4), &quot;Score:&quot;+str(score), BLUE, None, size=64)</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 72), &quot;Health:&quot;+str(health), BLUE, None, size=64)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Throwable(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    生成一个投掷的对象</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    def __init__(self, x, y, img, throw):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;, img))</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.firing = throw</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def update(self, worldy):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        投掷物理学</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        if self.rect.y &lt; worldy:</span></span>
<span class="line"><span>            if player.facing_right:</span></span>
<span class="line"><span>                self.rect.x += 15</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.x -= 15</span></span>
<span class="line"><span>            self.rect.y += 5</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.kill()</span></span>
<span class="line"><span>            self.firing = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># x 位置, y 位置, img 宽度, img 高度, img 文件</span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    def __init__(self, xloc, yloc, imgw, imgh, img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;, img)).convert()</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.y = yloc</span></span>
<span class="line"><span>        self.rect.x = xloc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    生成一名玩家</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.damage = 0</span></span>
<span class="line"><span>        self.score = 0</span></span>
<span class="line"><span>        self.facing_right = True</span></span>
<span class="line"><span>        self.is_jumping = True</span></span>
<span class="line"><span>        self.is_falling = True</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1, 5):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;, &#39;walk&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        if self.is_jumping:</span></span>
<span class="line"><span>            self.movey += 3.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def control(self, x, y):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        控制玩家移动</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def jump(self):</span></span>
<span class="line"><span>        if self.is_jumping is False:</span></span>
<span class="line"><span>            self.is_falling = False</span></span>
<span class="line"><span>            self.is_jumping = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        更新精灵位置</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向左移动</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.is_jumping = True</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3 * ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = pygame.transform.flip(self.images[self.frame // ani], True, False)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移动</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.is_jumping = True</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3 * ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame // ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 碰撞</span></span>
<span class="line"><span>        enemy_hit_list = pygame.sprite.spritecollide(self, enemy_list, False)</span></span>
<span class="line"><span>        if self.damage == 0:</span></span>
<span class="line"><span>            for enemy in enemy_hit_list:</span></span>
<span class="line"><span>                if not self.rect.contains(enemy):</span></span>
<span class="line"><span>                    self.damage = self.rect.colliderect(enemy)</span></span>
<span class="line"><span>        if self.damage == 1:</span></span>
<span class="line"><span>            idx = self.rect.collidelist(enemy_hit_list)</span></span>
<span class="line"><span>            if idx == -1:</span></span>
<span class="line"><span>                self.damage = 0   # 设置伤害回 0</span></span>
<span class="line"><span>                self.health -= 1  # 减去 1 单位健康度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.bottom = g.rect.top</span></span>
<span class="line"><span>            self.is_jumping = False  # 停止跳跃</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 掉落世界</span></span>
<span class="line"><span>        if self.rect.y &gt; worldy:</span></span>
<span class="line"><span>            self.health -=1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span>            self.rect.x = tx</span></span>
<span class="line"><span>            self.rect.y = ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.is_jumping = False  # 停止跳跃</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.bottom &lt;= p.rect.bottom:</span></span>
<span class="line"><span>               self.rect.bottom = p.rect.top</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>               self.movey += 3.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.is_jumping and self.is_falling is False:</span></span>
<span class="line"><span>            self.is_falling = True</span></span>
<span class="line"><span>            self.movey -= 33  # 跳跃多高</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        loot_hit_list = pygame.sprite.spritecollide(self, loot_list, False)</span></span>
<span class="line"><span>        for loot in loot_hit_list:</span></span>
<span class="line"><span>            loot_list.remove(loot)</span></span>
<span class="line"><span>            self.score += 1</span></span>
<span class="line"><span>            print(self.score)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.rect.x += self.movex</span></span>
<span class="line"><span>        self.rect.y += self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    生成一名敌人</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, x, y, img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;, img))</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        敌人移动</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance * 2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def update(self, firepower, enemy_list):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        检测火力碰撞</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        fire_hit_list = pygame.sprite.spritecollide(self, firepower, False)</span></span>
<span class="line"><span>        for fire in fire_hit_list:</span></span>
<span class="line"><span>            enemy_list.remove(self)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Level:</span></span>
<span class="line"><span>    def ground(lvl, gloc, tx, ty):</span></span>
<span class="line"><span>        ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        i = 0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            while i &lt; len(gloc):</span></span>
<span class="line"><span>                ground = Platform(gloc[i], worldy - ty, tx, ty, &#39;tile-ground.png&#39;)</span></span>
<span class="line"><span>                ground_list.add(ground)</span></span>
<span class="line"><span>                i = i + 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def bad(lvl, eloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            enemy = Enemy(eloc[0], eloc[1], &#39;enemy.png&#39;)</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group()</span></span>
<span class="line"><span>            enemy_list.add(enemy)</span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return enemy_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # x 位置, y 位置, img 宽度, img 高度, img 文件</span></span>
<span class="line"><span>    def platform(lvl, tx, ty):</span></span>
<span class="line"><span>        plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        ploc = []</span></span>
<span class="line"><span>        i = 0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            ploc.append((200, worldy - ty - 128, 3))</span></span>
<span class="line"><span>            ploc.append((300, worldy - ty - 256, 3))</span></span>
<span class="line"><span>            ploc.append((550, worldy - ty - 128, 4))</span></span>
<span class="line"><span>            while i &amp;lt; len(ploc):</span></span>
<span class="line"><span>                j = 0</span></span>
<span class="line"><span>                while j &lt;= ploc[i][2]:</span></span>
<span class="line"><span>                    plat = Platform((ploc[i][0] + (j * tx)), ploc[i][1], tx, ty, &#39;tile.png&#39;)</span></span>
<span class="line"><span>                    plat_list.add(plat)</span></span>
<span class="line"><span>                    j = j + 1</span></span>
<span class="line"><span>                print(&#39;run&#39; + str(i) + str(ploc[i]))</span></span>
<span class="line"><span>                i = i + 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return plat_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def loot(lvl):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            loot_list = pygame.sprite.Group()</span></span>
<span class="line"><span>            loot = Platform(tx*5, ty*5, tx, ty, &#39;loot_1.png&#39;)</span></span>
<span class="line"><span>            loot_list.add(loot)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return loot_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Setup 部分</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;, &#39;stage.png&#39;))</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>player = Player()         # 生成玩家</span></span>
<span class="line"><span>player.rect.x = 0         # 转到 x</span></span>
<span class="line"><span>player.rect.y = 30        # 转到 y</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10</span></span>
<span class="line"><span>fire = Throwable(player.rect.x, player.rect.y, &#39;fire.png&#39;, 0)</span></span>
<span class="line"><span>firepower = pygame.sprite.Group()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [300, worldy-ty-80]</span></span>
<span class="line"><span>enemy_list = Level.bad(1, eloc)</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i = 0</span></span>
<span class="line"><span>while i &amp;lt;= (worldx / tx) + tx:</span></span>
<span class="line"><span>    gloc.append(i * tx)</span></span>
<span class="line"><span>    i = i + 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ground_list = Level.ground(1, gloc, tx, ty)</span></span>
<span class="line"><span>plat_list = Level.platform(1, tx, ty)</span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>loot_list = Level.loot(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>主循环</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while main:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit()</span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>            finally:</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                try:</span></span>
<span class="line"><span>                    sys.exit()</span></span>
<span class="line"><span>                finally:</span></span>
<span class="line"><span>                    main = False</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(-steps, 0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(steps, 0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps, 0)</span></span>
<span class="line"><span>                player.facing_right = False</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps, 0)</span></span>
<span class="line"><span>                player.facing_right = True</span></span>
<span class="line"><span>            if event.key == pygame.K_SPACE:</span></span>
<span class="line"><span>                if not fire.firing:</span></span>
<span class="line"><span>                    fire = Throwable(player.rect.x, player.rect.y, &#39;fire.png&#39;, 1)</span></span>
<span class="line"><span>                    firepower.add(fire)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 向向滚动世界</span></span>
<span class="line"><span>    if player.rect.x &gt;= forwardx:</span></span>
<span class="line"><span>        scroll = player.rect.x - forwardx</span></span>
<span class="line"><span>        player.rect.x = forwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x -= scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x -= scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span>            l.rect.x -= scroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 向后滚动世界</span></span>
<span class="line"><span>    if player.rect.x &lt;= backwardx:</span></span>
<span class="line"><span>        scroll = backwardx - player.rect.x</span></span>
<span class="line"><span>        player.rect.x = backwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x += scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x += scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span>            l.rect.x += scroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player.gravity()</span></span>
<span class="line"><span>    player_list.draw(world)</span></span>
<span class="line"><span>    if fire.firing:</span></span>
<span class="line"><span>        fire.update(worldy)</span></span>
<span class="line"><span>        firepower.draw(world)</span></span>
<span class="line"><span>    enemy_list.draw(world)</span></span>
<span class="line"><span>    enemy_list.update(firepower, enemy_list)</span></span>
<span class="line"><span>    loot_list.draw(world)</span></span>
<span class="line"><span>    ground_list.draw(world)</span></span>
<span class="line"><span>    plat_list.draw(world)</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    stats(player.score, player.health)</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,51)),a("p",null,[s[28]||(s[28]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/20/9/add-throwing-python-game"},{default:e(()=>[...s[27]||(s[27]=[n("https://opensource.com/article/20/9/add-throwing-python-game",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[29]||(s[29]=[n("Seth Kenlon",-1)])]),_:1}),s[34]||(s[34]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[30]||(s[30]=[n("lujun9972",-1)])]),_:1}),s[35]||(s[35]=n(" 译者：",-1)),l(p,{href:"https://github.com/robsean"},{default:e(()=>[...s[31]||(s[31]=[n("robsean",-1)])]),_:1}),s[36]||(s[36]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[32]||(s[32]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[39]||(s[39]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[37]||(s[37]=[n("LCTT",-1)])]),_:1}),s[40]||(s[40]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[38]||(s[38]=[n("Linux中国",-1)])]),_:1}),s[41]||(s[41]=n(" 荣誉推出",-1))])])}const x=i(f,[["render",d]]);export{_ as __pageData,x as default};
