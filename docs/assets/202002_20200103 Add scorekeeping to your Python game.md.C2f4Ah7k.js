import{_ as t,a0 as o,w as c,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"添加计分到你的 Python 游戏 | LCTT x X-CMD","titleTemplate":false,"description":"添加计分到你的 Python 游戏 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"添加计分到你的 Python 游戏 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"添加计分到你的 Python 游戏 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200103 Add scorekeeping to your Python game","title":"添加计分到你的 Python 游戏","tag":"202002","desc":""},"relativePath":"202002/20200103 Add scorekeeping to your Python game.md","filePath":"[post].md"}'),d={name:"202002/20200103 Add scorekeeping to your Python game.md"};function f(y,s,m,g,h,u){const p=o("Link");return c(),r("div",null,[s[45]||(s[45]=a("h1",{id:"添加计分到你的-python-游戏",tabindex:"-1"},[n("添加计分到你的 Python 游戏 "),a("a",{class:"header-anchor",href:"#添加计分到你的-python-游戏","aria-label":"Permalink to “添加计分到你的 Python 游戏”"},"​")],-1)),s[46]||(s[46]=a("blockquote",null,[a("p",null,"在本系列的第十一篇有关使用 Python Pygame 模块进行编程的文章中，显示玩家获得战利品或受到伤害时的得分。")],-1)),s[47]||(s[47]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202002/01/154838led0y08y2aqetz1q.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("这是仍在进行中的关于使用 ",-1)),e(p,{href:"https://www.pygame.org/news"},{default:l(()=>[...s[0]||(s[0]=[n("Pygame",-1)])]),_:1}),s[3]||(s[3]=n(" 模块来在 ",-1)),e(p,{href:"https://www.python.org/"},{default:l(()=>[...s[1]||(s[1]=[n("Python 3",-1)])]),_:1}),s[4]||(s[4]=n(" 在创建电脑游戏的第十一部分。先前的文章是：",-1))]),a("ul",null,[a("li",null,[e(p,{href:"https://linux.cn/article-9071-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("通过构建一个简单的掷骰子游戏去学习怎么用 Python 编程",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10850-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("使用 Python 和 Pygame 模块构建一个游戏框架",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10858-1.html"},{default:l(()=>[...s[7]||(s[7]=[n("如何在你的 Python 游戏中添加一个玩家",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10874-1.html"},{default:l(()=>[...s[8]||(s[8]=[n("用 Pygame 使你的游戏角色移动起来",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10883-1.html"},{default:l(()=>[...s[9]||(s[9]=[n("如何向你的 Python 游戏中添加一个敌人",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10902-1.html"},{default:l(()=>[...s[10]||(s[10]=[n("在 Pygame 游戏中放置平台",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11780-1.html"},{default:l(()=>[...s[11]||(s[11]=[n("在你的 Python 游戏中模拟引力",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11790-1.html"},{default:l(()=>[...s[12]||(s[12]=[n("为你的 Python 平台类游戏添加跳跃功能",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11819-1.html"},{default:l(()=>[...s[13]||(s[13]=[n("使你的 Python 游戏玩家能够向前和向后跑",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11828-1.html"},{default:l(()=>[...s[14]||(s[14]=[n("在你的 Python 平台类游戏中放一些奖励",-1)])]),_:1})])]),s[48]||(s[48]=a("p",null,"如果你已经跟随这一系列很久，那么已经学习了使用 Python 创建一个视频游戏所需的所有基本语法和模式。然而，它仍然缺少一个至关重要的组成部分。这一组成部分不仅仅对用 Python 编程游戏重要；不管你探究哪个计算机分支，你都必需精通：作为一个程序员，通过阅读一种语言的或库的文档来学习新的技巧。",-1)),s[49]||(s[49]=a("p",null,"幸运的是，你正在阅读本文的事实表明你熟悉文档。为了使你的平台类游戏更加美观，在这篇文章中，你将在游戏屏幕上添加得分和生命值显示。不过，教你如何找到一个库的功能以及如何使用这些新的功能的这节课程并没有多神秘。",-1)),s[50]||(s[50]=a("h3",{id:"在-pygame-中显示得分",tabindex:"-1"},[n("在 Pygame 中显示得分 "),a("a",{class:"header-anchor",href:"#在-pygame-中显示得分","aria-label":"Permalink to “在 Pygame 中显示得分”"},"​")],-1)),s[51]||(s[51]=a("p",null,"现在，既然你有了可以被玩家收集的奖励，那就有充分的理由来记录分数，以便你的玩家看到他们收集了多少奖励。你也可以跟踪玩家的生命值，以便当他们被敌人击中时会有相应结果。",-1)),s[52]||(s[52]=a("p",null,"你已经有了跟踪分数和生命值的变量，但是这一切都发生在后台。这篇文章教你在游戏期间在游戏屏幕上以你选择的一种字体来显示这些统计数字。",-1)),s[53]||(s[53]=a("h3",{id:"阅读文档",tabindex:"-1"},[n("阅读文档 "),a("a",{class:"header-anchor",href:"#阅读文档","aria-label":"Permalink to “阅读文档”"},"​")],-1)),a("p",null,[s[16]||(s[16]=n("大多数 Python 模块都有文档，即使那些没有文档的模块，也能通过 Python 的帮助功能来进行最小的文档化。",-1)),e(p,{href:"http://pygame.org/news"},{default:l(()=>[...s[15]||(s[15]=[n("Pygame 的主页面",-1)])]),_:1}),s[17]||(s[17]=n(" 链接了它的文档。不过，Pygame 是一个带有很多文档的大模块，并且它的文档不像在 Opensource.com 上的文章一样，以同样易理解的（和友好的、易解释的、有用的）叙述风格来撰写的。它们是技术文档，并且列出在模块中可用的每个类和函数，各自要求的输入类型等等。如果你不适应参考代码组件描述，这可能会令人不知所措。",-1))]),s[54]||(s[54]=i(`<p>在烦恼于库的文档前，第一件要做的事，就是来想想你正在尝试达到的目标。在这种情况下，你想在屏幕上显示玩家的得分和生命值。</p><p>在你确定你需要的结果后，想想它需要什么的组件。你可以从变量和函数的方面考虑这一点，或者，如果你还没有自然地想到这一点，你可以进行一般性思考。你可能意识到需要一些文本来显示一个分数，你希望 Pygame 在屏幕上绘制这些文本。如果你仔细思考，你可能会意识到它与在屏幕上渲染一个玩家、奖励或一个平台并多么大的不同。</p><p>从技术上讲，你<em>可以</em>使用数字图形，并让 Pygame 显示这些数字图形。它不是达到你目标的最容易的方法，但是如果它是你唯一知道的方法，那么它是一个有效的方法。不过，如果你参考 Pygame 的文档，你看到列出的模块之一是 <code>font</code>，这是 Pygame 使得在屏幕上来使打印文本像输入文字一样容易的方法。</p><h3 id="解密技术文档" tabindex="-1">解密技术文档 <a class="header-anchor" href="#解密技术文档" aria-label="Permalink to “解密技术文档”">​</a></h3><p><code>font</code> 文档页面以 <code>pygame.font.init()</code> 开始，它列出了用于初始化字体模块的函数。它由 <code>pygame.init()</code> 自动地调用，你已经在代码中调用了它。再强调一次，从技术上讲，你已经到达一个<em>足够好</em>的点。虽然你尚不知道<em>如何做</em>，你知道你<em>能够</em>使用 <code>pygame.font</code> 函数来在屏幕上打印文本。</p><p>然而，如果你阅读更多一些，你会找到这里还有一种更好的方法来打印字体。<code>pygame.freetype</code> 模块在文档中的描述方式如下：</p><blockquote><p><code>pygame.freetype</code> 模块是 <code>pygame.fontpygame</code> 模块的一个替代品，用于加载和渲染字体。它有原函数的所有功能，外加很多新的功能。</p></blockquote><p>在 <code>pygame.freetype</code> 文档页面的下方，有一些示例代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pygame</span></span>
<span class="line"><span>import pygame.freetype</span></span></code></pre></div><p>你的代码应该已经导入了 Pygame，不过，请修改你的 <code>import</code> 语句以包含 Freetype 模块：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import pygame.freetype</span></span></code></pre></div><h3 id="在-pygame-中使用字体" tabindex="-1">在 Pygame 中使用字体 <a class="header-anchor" href="#在-pygame-中使用字体" aria-label="Permalink to “在 Pygame 中使用字体”">​</a></h3><p>从 <code>font</code> 模块的描述中可以看出，显然 Pygame 使用一种字体（不管它的你提供的或内置到 Pygame 的默认字体）在屏幕上渲染字体。滚动浏览 <code>pygame.freetype</code> 文档来找到 <code>pygame.freetype.Font</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pygame.freetype.Font</span></span>
<span class="line"><span>从支持的字体文件中创建一个新的字体实例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Font(file, size=0, font_index=0, resolution=0, ucs4=False) -&gt; Font</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pygame.freetype.Font.name</span></span>
<span class="line"><span>  符合规则的字体名称。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pygame.freetype.Font.path</span></span>
<span class="line"><span>  字体文件路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pygame.freetype.Font.size</span></span>
<span class="line"><span>  在渲染中使用的默认点大小</span></span></code></pre></div><p>这描述了如何在 Pygame 中构建一个字体“对象”。把屏幕上的一个简单对象视为一些代码属性的组合对你来说可能不太自然，但是这与你构建英雄和敌人精灵的方式非常类似。你需要一个字体文件，而不是一个图像文件。在你有一个字体文件后，你可以在你的代码中使用 <code>pygame.freetype.Font</code> 函数来创建一个字体对象，然后使用该对象来在屏幕上渲染文本。</p><p>因为并不是世界上的每个人的电脑上都有完全一样的字体，因此将你选择的字体与你的游戏捆绑在一起是很重要的。要捆绑字体，首先在你的游戏文件夹中创建一个新的目录，放在你为图像而创建的文件目录旁边。称其为 <code>fonts</code> 。</p><p>即使你的计算机操作系统随附了几种字体，但是将这些字体给予其他人是非法的。这看起来很奇怪，但法律就是这样运作的。如果想与你的游戏一起随附一种字体，你必需找到一种开源或知识共享的字体，以允许你随游戏一起提供该字体。</p><p>专门提供自由和合法字体的网站包括：</p>`,18)),a("ul",null,[a("li",null,[e(p,{href:"https://fontlibrary.org/"},{default:l(()=>[...s[18]||(s[18]=[n("Font Library",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.fontsquirrel.com/"},{default:l(()=>[...s[19]||(s[19]=[n("Font Squirrel",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.theleagueofmoveabletype.com/"},{default:l(()=>[...s[20]||(s[20]=[n("League of Moveable Type",-1)])]),_:1})])]),a("p",null,[s[22]||(s[22]=n("当你找到你喜欢的字体后，下载下来。解压缩 ZIP 或 ",-1)),e(p,{href:"https://opensource.com/article/17/7/how-unzip-targz-file"},{default:l(()=>[...s[21]||(s[21]=[n("TAR",-1)])]),_:1}),s[23]||(s[23]=n(" 文件，并移动 ",-1)),s[24]||(s[24]=a("code",null,".ttf",-1)),s[25]||(s[25]=n(" 或 ",-1)),s[26]||(s[26]=a("code",null,".otf",-1)),s[27]||(s[27]=n(" 文件到你的项目目录下的 ",-1)),s[28]||(s[28]=a("code",null,"fonts",-1)),s[29]||(s[29]=n(" 文件夹中。",-1))]),s[55]||(s[55]=i(`<p>你没有安装字体到你的计算机上。你只是放置字体到你游戏的 <code>fonts</code> 文件夹中，以便 Pygame 可以使用它。如果你想，你<em>可以</em>在你的计算机上安装该字体，但是没有必要。重要的是将字体放在你的游戏目录中，这样 Pygame 可以“描绘”字体到屏幕上。</p><p>如果字体文件的名称复杂且带有空格或特殊字符，只需要重新命名它即可。文件名称是完全任意的，并且对你来说，文件名称越简单，越容易将其键入你的代码中。</p><p>现在告诉 Pygame 你的字体。从文档中你知道，当你至少提供了字体文件路径给 <code>pygame.freetype.Font</code> 时（文档明确指出所有其余属性都是可选的），你将在返回中获得一个字体对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Font(file, size=0, font_index=0, resolution=0, ucs4=False) -&gt; Font</span></span></code></pre></div><p>创建一个称为 <code>myfont</code> 的新变量来充当你在游戏中字体，并放置 <code>Font</code> 函数的结果到这个变量中。这个示例中使用 <code>amazdoom.ttf</code> 字体，但是你可以使用任何你想使用的字体。在你的设置部分放置这些代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>font_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),&quot;fonts&quot;,&quot;amazdoom.ttf&quot;)</span></span>
<span class="line"><span>font_size = tx</span></span>
<span class="line"><span>myfont = pygame.freetype.Font(font_path, font_size)</span></span></code></pre></div><h3 id="在-pygame-中显示文本" tabindex="-1">在 Pygame 中显示文本 <a class="header-anchor" href="#在-pygame-中显示文本" aria-label="Permalink to “在 Pygame 中显示文本”">​</a></h3><p>现在你已经创建一个字体对象，你需要一个函数来绘制你想绘制到屏幕上的文本。这和你在你的游戏中绘制背景和平台是相同的原理。</p><p>首先，创建一个函数，并使用 <code>myfont</code> 对象来创建一些文本，设置颜色为某些 RGB 值。这必须是一个全局函数；它不属于任何具体的类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def stats(score,health):</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 4), &quot;Score:&quot;+str(score), WHITE, None, size=64)</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 72), &quot;Health:&quot;+str(health), WHITE, None, size=64)</span></span></code></pre></div><p>当然，你此刻已经知道，如果它不在主循环中，你的游戏将不会发生任何事，所以在文件的底部添加一个对你的 <code>stats</code> 函数的调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    stats(player.score,player.health) # draw text</span></span>
<span class="line"><span>    pygame.display.flip()</span></span></code></pre></div><p>尝试你的游戏。</p><p>当玩家收集奖励品时，得分会上升。当玩家被敌人击中时，生命值下降。成功！</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-score.jpg" alt="Keeping score in Pygame" title="Keeping score in Pygame"></p><p>不过，这里有一个问题。当一个玩家被敌人击中时，健康度会<em>一路</em>下降，这是不公平的。你刚刚发现一个非致命的错误。非致命的错误是这些在应用程序中小问题，（通常）不会阻止应用程序启动或甚至导致停止工作，但是它们要么没有意义，要么会惹恼用户。这里是如何解决这个问题的方法。</p><h3 id="修复生命值计数" tabindex="-1">修复生命值计数 <a class="header-anchor" href="#修复生命值计数" aria-label="Permalink to “修复生命值计数”">​</a></h3><p>当前生命值系统的问题是，敌人接触玩家时，Pygame 时钟的每一次滴答，健康度都会减少。这意味着一个缓慢移动的敌人可能在一次遭遇中将一个玩家降低健康度至 -200 ，这不公平。当然，你可以给你的玩家一个 10000 的起始健康度得分，而不用担心它；这可以工作，并且可能没有人会注意。但是这里有一个更好的方法。</p><p>当前，你的代码侦查出一个玩家和一个敌人发生碰撞的时候。生命值问题的修复是检测<em>两个</em>独立的事件：什么时候玩家和敌人碰撞，并且，在它们碰撞后，什么时候它们<em>停止</em>碰撞。</p><p>首先，在你的玩家类中，创建一个变量来代表玩家和敌人碰撞在一起：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.damage = 0</span></span></code></pre></div><p>在你的 <code>Player</code> 类的 <code>update</code> 函数中，<em>移除</em>这块代码块：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            #print(self.health)</span></span></code></pre></div><p>并且在它的位置，只要玩家当前没有被击中，检查碰撞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.damage == 0:</span></span>
<span class="line"><span>            for enemy in enemy_hit_list:</span></span>
<span class="line"><span>                if not self.rect.contains(enemy):</span></span>
<span class="line"><span>                    self.damage = self.rect.colliderect(enemy)</span></span></code></pre></div><p>你可能会在你删除的语句块和你刚刚添加的语句块之间看到相似之处。它们都在做相同的工作，但是新的代码更复杂。最重要的是，只有当玩家<em>当前</em>没有被击中时，新的代码才运行。这意味着，当一个玩家和敌人碰撞时，这些代码运行一次，而不是像以前那样一直发生碰撞。</p><p>新的代码使用两个新的 Pygame 函数。<code>self.rect.contains</code> 函数检查一个敌人当前是否在玩家的边界框内，并且当它是 <code>true</code> 时， <code>self.rect.colliderect</code> 设置你的新的 <code>self.damage</code> 变量为 1，而不管它多少次是 <code>true</code> 。</p><p>现在，即使被一个敌人击中 3 秒，对 Pygame 来说仍然看作一次击中。</p><p>我通过通读 Pygame 的文档而发现了这些函数。你没有必要一次阅读完全部的文档，并且你也没有必要阅读每个函数的每个单词。不过，花费时间在你正在使用的新的库或模块的文档上是很重要的；否则，你极有可能在重新发明轮子。不要花费一个下午的时间来尝试修改拼接一个解决方案到一些东西，而这些东西已经被你正在使用的框架的所解决。阅读文档，知悉函数，并从别人的工作中获益！</p><p>最后，添加另一个代码语句块来侦查出什么时候玩家和敌人不再接触。然后直到那时，才从玩家减少一个生命值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.damage == 1:</span></span>
<span class="line"><span>            idx = self.rect.collidelist(enemy_hit_list)</span></span>
<span class="line"><span>            if idx == -1:</span></span>
<span class="line"><span>                self.damage = 0   # set damage back to 0</span></span>
<span class="line"><span>                self.health -= 1  # subtract 1 hp</span></span></code></pre></div><p>注意，<em>只有</em>当玩家被击中时，这个新的代码才会被触发。这意味着，在你的玩家在你的游戏世界正在探索或收集奖励时，这个代码不会运行。它仅当 <code>self.damage</code> 变量被激活时运行。</p><p>当代码运行时，它使用 <code>self.rect.collidelist</code> 来查看玩家是否<em>仍然</em>接触在你敌人列表中的敌人（当其未侦查到碰撞时，<code>collidelist</code> 返回 -1）。在它没有接触敌人时，是该处理 <code>self.damage</code> 的时机：通过设置 <code>self.damage</code> 变量回到 0 来使其无效，并减少一点生命值。</p><p>现在尝试你的游戏。</p><h3 id="得分反应" tabindex="-1">得分反应 <a class="header-anchor" href="#得分反应" aria-label="Permalink to “得分反应”">​</a></h3><p>现在，你有一个来让你的玩家知道它们分数和生命值的方法，当你的玩家达到某些里程碑时，你可以确保某些事件发生。例如，也许这里有一个特殊的恢复一些生命值的奖励项目。也许一个到达 0 生命值的玩家不得不从一个关卡的起始位置重新开始。</p><p>你可以在你的代码中检查这些事件，并且相应地操纵你的游戏世界。你已经知道该怎么做，所以请浏览文档来寻找新的技巧，并且独立地尝试这些技巧。</p><p>这里是到目前为止所有的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span># add gravity</span></span>
<span class="line"><span># add jumping</span></span>
<span class="line"><span># add scrolling</span></span>
<span class="line"><span># add loot</span></span>
<span class="line"><span># add score</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GNU All-Permissive License</span></span>
<span class="line"><span># Copying and distribution of this file, with or without modification,</span></span>
<span class="line"><span># are permitted in any medium without royalty provided the copyright</span></span>
<span class="line"><span># notice and this notice are preserved.  This file is offered as-is,</span></span>
<span class="line"><span># without any warranty.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import pygame.freetype</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Objects</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    # x location, y location, img width, img height, img file    </span></span>
<span class="line"><span>    def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.y = yloc</span></span>
<span class="line"><span>        self.rect.x = xloc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn a player</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.damage = 0</span></span>
<span class="line"><span>        self.collide_delta = 0</span></span>
<span class="line"><span>        self.jump_delta = 6</span></span>
<span class="line"><span>        self.score = 1</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1,9):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;,&#39;hero&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect  = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def jump(self,platform_list):</span></span>
<span class="line"><span>        self.jump_delta = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # how fast player falls</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.rect.y &gt; worldy and self.movey &gt;= 0:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        control player movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        Update sprite position</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving left</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving right</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # collisions</span></span>
<span class="line"><span>        enemy_hit_list = pygame.sprite.spritecollide(self, enemy_list, False)</span></span>
<span class="line"><span>        if self.damage == 0:</span></span>
<span class="line"><span>            for enemy in enemy_hit_list:</span></span>
<span class="line"><span>                if not self.rect.contains(enemy):</span></span>
<span class="line"><span>                    self.damage = self.rect.colliderect(enemy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.damage == 1:</span></span>
<span class="line"><span>            idx = self.rect.collidelist(enemy_hit_list)</span></span>
<span class="line"><span>            if idx == -1:</span></span>
<span class="line"><span>                self.damage = 0   # set damage back to 0</span></span>
<span class="line"><span>                self.health -= 1  # subtract 1 hp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        loot_hit_list = pygame.sprite.spritecollide(self, loot_list, False)</span></span>
<span class="line"><span>        for loot in loot_hit_list:</span></span>
<span class="line"><span>            loot_list.remove(loot)</span></span>
<span class="line"><span>            self.score += 1</span></span>
<span class="line"><span>            print(self.score)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.collide_delta = 0 # stop jumping</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span>            self.collide_delta = 0 # stop jumping</span></span>
<span class="line"><span>            if self.rect.y &gt; g.rect.y:</span></span>
<span class="line"><span>                self.health -=1</span></span>
<span class="line"><span>                print(self.health)</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>        if self.collide_delta &lt; 6 and self.jump_delta &lt; 6:</span></span>
<span class="line"><span>            self.jump_delta = 6*2</span></span>
<span class="line"><span>            self.movey -= 33  # how high to jump</span></span>
<span class="line"><span>            self.collide_delta += 6</span></span>
<span class="line"><span>            self.jump_delta    += 6</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn an enemy</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self,x,y,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        #self.image.convert_alpha()</span></span>
<span class="line"><span>        #self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        enemy movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.movey += 3.2</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance*2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if not self.rect.y &gt;= worldy-ty-ty:</span></span>
<span class="line"><span>            self.rect.y += self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>class Level():</span></span>
<span class="line"><span>    def bad(lvl,eloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            enemy = Enemy(eloc[0],eloc[1],&#39;yeti.png&#39;) # spawn enemy</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group() # create enemy group</span></span>
<span class="line"><span>            enemy_list.add(enemy)              # add enemy to group</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return enemy_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def loot(lvl,tx,ty):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            loot_list = pygame.sprite.Group()</span></span>
<span class="line"><span>            loot = Platform(200,ty*7,tx,ty, &#39;loot_1.png&#39;)</span></span>
<span class="line"><span>            loot_list.add(loot)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return loot_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>        ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            while i &lt; len(gloc):</span></span>
<span class="line"><span>                ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                ground_list.add(ground)</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def platform(lvl,tx,ty):</span></span>
<span class="line"><span>        plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        ploc = []</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            ploc.append((20,worldy-ty-128,3))</span></span>
<span class="line"><span>            ploc.append((300,worldy-ty-256,3))</span></span>
<span class="line"><span>            ploc.append((500,worldy-ty-128,4))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            while i &lt; len(ploc):</span></span>
<span class="line"><span>                j=0</span></span>
<span class="line"><span>                while j &lt;= ploc[i][2]:</span></span>
<span class="line"><span>                    plat = Platform((ploc[i][0]+(j*tx)),ploc[i][1],tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                    plat_list.add(plat)</span></span>
<span class="line"><span>                    j=j+1</span></span>
<span class="line"><span>                print(&#39;run&#39; + str(i) + str(ploc[i]))</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return plat_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def stats(score,health):</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 4), &quot;Score:&quot;+str(score), SNOWGRAY, None, size=64)</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 72), &quot;Health:&quot;+str(health), SNOWGRAY, None, size=64)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Setup</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40 # frame rate</span></span>
<span class="line"><span>ani = 4  # animation cycles</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE  = (25,25,200)</span></span>
<span class="line"><span>BLACK = (23,23,23 )</span></span>
<span class="line"><span>WHITE = (254,254,254)</span></span>
<span class="line"><span>SNOWGRAY = (137,164,166)</span></span>
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player() # spawn player</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10</span></span>
<span class="line"><span>forwardx = 600</span></span>
<span class="line"><span>backwardx = 230</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [200,20]</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span>tx = 64 #tile size</span></span>
<span class="line"><span>ty = 64 #tile size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>font_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),&quot;fonts&quot;,&quot;amazdoom.ttf&quot;)</span></span>
<span class="line"><span>font_size = tx</span></span>
<span class="line"><span>myfont = pygame.freetype.Font(font_path, font_size)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span>plat_list = Level.platform( 1,tx,ty )</span></span>
<span class="line"><span>loot_list = Level.loot(1,tx,ty)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Main loop</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                print(&quot;LEFT&quot;)</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                print(&quot;RIGHT&quot;)</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(plat_list)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # scroll the world forward</span></span>
<span class="line"><span>    if player.rect.x &gt;= forwardx:</span></span>
<span class="line"><span>        scroll = player.rect.x - forwardx</span></span>
<span class="line"><span>        player.rect.x = forwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x -= scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x -= scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            l.rect.x -= scroll</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>    # scroll the world backward</span></span>
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
<span class="line"><span>    player.gravity() # check gravity</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) #refresh player position</span></span>
<span class="line"><span>    enemy_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    ground_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    plat_list.draw(world)   # refresh platforms</span></span>
<span class="line"><span>    loot_list.draw(world)   # refresh loot</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    stats(player.score,player.health) # draw text</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,40)),a("p",null,[s[31]||(s[31]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/add-scorekeeping-your-python-game"},{default:l(()=>[...s[30]||(s[30]=[n("https://opensource.com/article/20/1/add-scorekeeping-your-python-game",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[32]||(s[32]=[n("Seth Kenlon",-1)])]),_:1}),s[37]||(s[37]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[33]||(s[33]=[n("lujun9972",-1)])]),_:1}),s[38]||(s[38]=n(" 译者：",-1)),e(p,{href:"https://github.com/robsean"},{default:l(()=>[...s[34]||(s[34]=[n("robsean",-1)])]),_:1}),s[39]||(s[39]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[35]||(s[35]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[42]||(s[42]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[40]||(s[40]=[n("LCTT",-1)])]),_:1}),s[43]||(s[43]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[41]||(s[41]=[n("Linux中国",-1)])]),_:1}),s[44]||(s[44]=n(" 荣誉推出",-1))])])}const v=t(d,[["render",f]]);export{x as __pageData,v as default};
