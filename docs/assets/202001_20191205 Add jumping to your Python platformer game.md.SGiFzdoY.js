import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"为你的 Python 平台类游戏添加跳跃功能 | LCTT x X-CMD","titleTemplate":false,"description":"为你的 Python 平台类游戏添加跳跃功能 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"为你的 Python 平台类游戏添加跳跃功能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"为你的 Python 平台类游戏添加跳跃功能 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20191205 Add jumping to your Python platformer game","title":"为你的 Python 平台类游戏添加跳跃功能","tag":"202001","desc":""},"relativePath":"202001/20191205 Add jumping to your Python platformer game.md","filePath":"[post].md"}'),d={name:"202001/20191205 Add jumping to your Python platformer game.md"};function f(m,s,y,g,u,h){const p=t("Link");return c(),o("div",null,[s[30]||(s[30]=a("h1",{id:"为你的-python-平台类游戏添加跳跃功能",tabindex:"-1"},[n("为你的 Python 平台类游戏添加跳跃功能 "),a("a",{class:"header-anchor",href:"#为你的-python-平台类游戏添加跳跃功能","aria-label":"Permalink to “为你的 Python 平台类游戏添加跳跃功能”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"在本期使用 Python Pygame 模块编写视频游戏中，学会如何使用跳跃来对抗重力。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/16/214917c8mxn82fot82fx88.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在本系列的 ",-1)),l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("前一篇文章",-1)])]),_:1}),s[2]||(s[2]=n(" 中，你已经模拟了重力。但现在，你需要赋予你的角色跳跃的能力来对抗重力。",-1))]),s[33]||(s[33]=r(`<p>跳跃是对重力作用的暂时延缓。在这一小段时间里，你是向<em>上</em>跳，而不是被重力拉着向下落。但你一旦到达了跳跃的最高点，重力就会重新发挥作用，将你拉回地面。</p><p>在代码中，这种变化被表示为变量。首先，你需要为玩家精灵建立一个变量，使得 Python 能够跟踪该精灵是否正在跳跃中。一旦玩家精灵开始跳跃，他就会再次受到重力的作用，并被拉回最近的物体。</p><h3 id="设置跳跃状态变量" tabindex="-1">设置跳跃状态变量 <a class="header-anchor" href="#设置跳跃状态变量" aria-label="Permalink to “设置跳跃状态变量”">​</a></h3><p>你需要为你的 <code>Player</code> 类添加两个新变量：</p><ul><li>一个是为了跟踪你的角色是否正在跳跃中，可通过你的玩家精灵是否站在坚实的地面来确定</li><li>一个是为了将玩家带回地面</li></ul><p>将如下两个变量添加到你的 <code>Player</code> 类中。在下方的代码中，注释前的部分用于提示上下文，因此只需要添加最后两行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                self.movex = 0</span></span>
<span class="line"><span>                self.movey = 0</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>                self.health = 10</span></span>
<span class="line"><span>                # 此处是重力相关变量</span></span>
<span class="line"><span>                self.collide_delta = 0</span></span>
<span class="line"><span>                self.jump_delta = 6</span></span></code></pre></div><p>第一个变量 <code>collide_delta</code> 被设为 0 是因为在正常状态下，玩家精灵没有处在跳跃中的状态。另一个变量 <code>jump_delta</code> 被设为 6，是为了防止精灵在第一次进入游戏世界时就发生反弹（实际上就是跳跃）。当你完成了本篇文章的示例，尝试把该变量设为 0 看看会发生什么。</p><h3 id="跳跃中的碰撞" tabindex="-1">跳跃中的碰撞 <a class="header-anchor" href="#跳跃中的碰撞" aria-label="Permalink to “跳跃中的碰撞”">​</a></h3><p>如果你是跳到一个蹦床上，那你的跳跃一定非常优美。但是如果你是跳向一面墙会发生什么呢？（千万不要去尝试！）不管你的起跳多么令人印象深刻，当你撞到比你更大更硬的物体时，你都会立马停下。（LCTT 译注：原理参考动量守恒定律）</p><p>为了在你的视频游戏中模拟这一点，你需要在你的玩家精灵与地面等东西发生碰撞时，将 <code>self.collide_delta</code> 变量设为 0。如果你的 <code>self.collide_delta</code> 不是 0 而是其它的什么值，那么你的玩家就会发生跳跃，并且当你的玩家与墙或者地面发生碰撞时无法跳跃。</p><p>在你的 <code>Player</code> 类的 <code>update</code> 方法中，将地面碰撞相关代码块修改为如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span>            self.collide_delta = 0 # 停止跳跃</span></span>
<span class="line"><span>            if self.rect.y &gt; g.rect.y:</span></span>
<span class="line"><span>                self.health -=1</span></span>
<span class="line"><span>                print(self.health)</span></span></code></pre></div><p>这段代码块检查了地面精灵和玩家精灵之间发生的碰撞。当发生碰撞时，它会将玩家 Y 方向的坐标值设置为游戏窗口的高度减去一个瓷砖的高度再减去另一个瓷砖的高度。以此保证了玩家精灵是站在地面<em>上</em>，而不是嵌在地面里。同时它也将 <code>self.collide_delta</code> 设为 0，使得程序能够知道玩家未处在跳跃中。除此之外，它将 <code>self.movey</code> 设为 0，使得程序能够知道玩家当前未受到重力的牵引作用（这是游戏物理引擎的奇怪之处，一旦玩家落地，也就没有必要继续将玩家拉向地面）。</p><p>此处 <code>if</code> 语句用来检测玩家是否已经落到地面之<em>下</em>，如果是，那就扣除一点生命值作为惩罚。此处假定了你希望当你的玩家落到地图之外时失去生命值。这个设定不是必需的，它只是平台类游戏的一种惯例。更有可能的是，你希望这个事件能够触发另一些事件，或者说是一种能够让你的现实世界玩家沉迷于让精灵掉到屏幕之外的东西。一种简单的恢复方式是在玩家精灵掉落到地图之外时，将 <code>self.rect.y</code> 重新设置为 0，这样它就会在地图上方重新生成，并落到坚实的地面上。</p><h3 id="撞向地面" tabindex="-1">撞向地面 <a class="header-anchor" href="#撞向地面" aria-label="Permalink to “撞向地面”">​</a></h3><p>模拟的重力使你玩家的 Y 坐标不断增大（LCTT 译注：此处原文中为 0，但在 Pygame 中越靠下方 Y 坐标应越大）。要实现跳跃，完成如下代码使你的玩家精灵离开地面，飞向空中。</p><p>在你的 <code>Player</code> 类的 <code>update</code> 方法中，添加如下代码来暂时延缓重力的作用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.collide_delta &lt; 6 and self.jump_delta &lt; 6:</span></span>
<span class="line"><span>            self.jump_delta = 6*2</span></span>
<span class="line"><span>            self.movey -= 33  # 跳跃的高度</span></span>
<span class="line"><span>            self.collide_delta += 6</span></span>
<span class="line"><span>            self.jump_delta    += 6</span></span></code></pre></div><p>根据此代码所示，跳跃使玩家精灵向空中移动了 33 个像素。此处是<em>负</em> 33 是因为在 Pygame 中，越小的数代表距离屏幕顶端越近。</p><p>不过此事件视条件而定，只有当 <code>self.collide_delta</code> 小于 6（缺省值定义在你 <code>Player</code> 类的 <code>init</code> 方法中）并且 <code>self.jump_delta</code> 也于 6 的时候才会发生。此条件能够保证直到玩家碰到一个平台，才能触发另一次跳跃。换言之，它能够阻止空中二段跳。</p><p>在某些特殊条件下，你可能不想阻止空中二段跳，或者说你允许玩家进行空中二段跳。举个栗子，如果玩家获得了某个战利品，那么在他被敌人攻击到之前，都能够拥有空中二段跳的能力。</p><p>当你完成本篇文章中的示例，尝试将 <code>self.collide_delta</code> 和 <code>self.jump_delta</code> 设置为 0，从而获得百分之百的几率触发空中二段跳。</p><h3 id="在平台上着陆" tabindex="-1">在平台上着陆 <a class="header-anchor" href="#在平台上着陆" aria-label="Permalink to “在平台上着陆”">​</a></h3><p>目前你已经定义了在玩家精灵摔落地面时的抵抗重力条件，但此时你的游戏代码仍保持平台与地面置于不同的列表中（就像本文中做的很多其他选择一样，这个设定并不是必需的，你可以尝试将地面作为另一种平台）。为了允许玩家精灵站在平台之上，你必须像检测地面碰撞一样，检测玩家精灵与平台精灵之间的碰撞。将如下代码放于你的 <code>update</code> 方法中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.collide_delta = 0 # 跳跃结束</span></span>
<span class="line"><span>            self.movey = 0</span></span></code></pre></div><p>但此处还有一点需要考虑：平台悬在空中，也就意味着玩家可以通过从上面或者从下面接触平台来与之互动。</p><p>确定平台如何与玩家互动取决于你，阻止玩家从下方到达平台也并不稀奇。将如下代码加到上方的代码块中，使得平台表现得像天花板或者说是藤架。只有在玩家精灵跳得比平台上沿更高时才能跳到平台上，但会阻止玩家从平台下方跳上来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span></code></pre></div><p>此处 <code>if</code> 语句代码块的第一个子句阻止玩家精灵从平台正下方跳到平台上。如果它检测到玩家精灵的坐标比平台更大（在 Pygame 中，坐标更大意味着在屏幕的更下方），那么将玩家精灵新的 Y 坐标设置为当前平台的 Y 坐标加上一个瓷砖的高度。实际效果就是保证玩家精灵距离平台一个瓷砖的高度，防止其从下方穿过平台。</p><p><code>else</code> 子句做了相反的事情。当程序运行到此处时，如果玩家精灵的 Y 坐标<em>不</em>比平台的更大，意味着玩家精灵是从空中落下（不论是由于玩家刚刚从此处生成，或者是玩家执行了跳跃）。在这种情况下，玩家精灵的 Y 坐标被设为平台的 Y 坐标减去一个瓷砖的高度（切记，在 Pygame 中更小的 Y 坐标代表在屏幕上的更高处）。这样就能保证玩家在平台<em>上</em>，除非他从平台上跳下来或者走下来。</p><p>你也可以尝试其他的方式来处理玩家与平台之间的互动。举个栗子，也许玩家精灵被设定为处在平台的“前面”，他能够无障碍地跳跃穿过平台并站在上面。或者你可以设计一种平台会减缓而又不完全阻止玩家的跳跃过程。甚至你可以通过将不同平台分到不同列表中来混合搭配使用。</p><h3 id="触发一次跳跃" tabindex="-1">触发一次跳跃 <a class="header-anchor" href="#触发一次跳跃" aria-label="Permalink to “触发一次跳跃”">​</a></h3><p>目前为此，你的代码已经模拟了所有必需的跳跃条件，但仍缺少一个跳跃触发器。你的玩家精灵的 <code>self.jump_delta</code> 初始值被设置为 6，只有当它比 6 小的时候才会触发更新跳跃的代码。</p><p>为跳跃变量设置一个新的设置方法，在你的 <code>Player</code> 类中创建一个 <code>jump</code> 方法，并将 <code>self.jump_delta</code> 设为小于 6 的值。通过使玩家精灵向空中移动 33 个像素，来暂时减缓重力的作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def jump(self,platform_list):</span></span>
<span class="line"><span>        self.jump_delta = 0</span></span></code></pre></div><p>不管你相信与否，这就是 <code>jump</code> 方法的全部。剩余的部分在 <code>update</code> 方法中，你已经在前面实现了相关代码。</p><p>要使你游戏中的跳跃功能生效，还有最后一件事情要做。如果你想不起来是什么，运行游戏并观察跳跃是如何生效的。</p><p>问题就在于你的主循环中没有调用 <code>jump</code> 方法。先前你已经为该方法创建了一个按键占位符，现在，跳跃键所做的就是将 <code>jump</code> 打印到终端。</p><h3 id="调用-jump-方法" tabindex="-1">调用 jump 方法 <a class="header-anchor" href="#调用-jump-方法" aria-label="Permalink to “调用 jump 方法”">​</a></h3><p>在你的主循环中，将<em>上</em>方向键的效果从打印一条调试语句，改为调用 <code>jump</code> 方法。</p><p>注意此处，与 <code>update</code> 方法类似，<code>jump</code> 方法也需要检测碰撞，因此你需要告诉它使用哪个 <code>plat_list</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(plat_list)</span></span></code></pre></div><p>如果你倾向于使用空格键作为跳跃键，使用 <code>pygame.K_SPACE</code> 替代 <code>pygame.K_UP</code> 作为按键。另一种选择，你可以同时使用两种方式（使用单独的 <code>if</code> 语句），给玩家多一种选择。</p><p>现在来尝试你的游戏吧！在下一篇文章中，你将让你的游戏卷动起来。</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-jump.jpg" alt="Pygame 平台类游戏" title="Pygame platformer"></p><p>以下是目前为止的所有代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span># add gravity</span></span>
<span class="line"><span># add jumping</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GNU All-Permissive License</span></span>
<span class="line"><span># Copying and distribution of this file, with or without modification,</span></span>
<span class="line"><span># are permitted in any medium without royalty provided the copyright</span></span>
<span class="line"><span># notice and this notice are preserved.  This file is offered as-is,</span></span>
<span class="line"><span># without any warranty.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Objects</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    # x 坐标，y 坐标，图像宽度，图像高度，图像文件</span></span>
<span class="line"><span>    def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.y = yloc</span></span>
<span class="line"><span>        self.rect.x = xloc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    生成一个玩家</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.collide_delta = 0</span></span>
<span class="line"><span>        self.jump_delta = 6</span></span>
<span class="line"><span>        self.score = 1</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1,9):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;,&#39;hero&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect  = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def jump(self,platform_list):</span></span>
<span class="line"><span>        self.jump_delta = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # how fast player falls</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.rect.y &gt; worldy and self.movey &gt;= 0:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        控制玩家移动</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        更新精灵位置</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向左移动</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移动</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 碰撞</span></span>
<span class="line"><span>        enemy_hit_list = pygame.sprite.spritecollide(self, enemy_list, False)</span></span>
<span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            #print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.collide_delta = 0 # stop jumping</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span>            self.collide_delta = 0 # stop jumping</span></span>
<span class="line"><span>            if self.rect.y &gt; g.rect.y:</span></span>
<span class="line"><span>                self.health -=1</span></span>
<span class="line"><span>                print(self.health)</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>        if self.collide_delta &lt; 6 and self.jump_delta &lt; 6:</span></span>
<span class="line"><span>            self.jump_delta = 6*2</span></span>
<span class="line"><span>            self.movey -= 33  # how high to jump</span></span>
<span class="line"><span>            self.collide_delta += 6</span></span>
<span class="line"><span>            self.jump_delta    += 6</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    生成一个敌人</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self,x,y,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        #self.image.convert_alpha()</span></span>
<span class="line"><span>        #self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        敌人移动</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.movey += 3.2</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance*2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if not self.rect.y &gt;= worldy-ty-ty:</span></span>
<span class="line"><span>            self.rect.y += self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>class Level():</span></span>
<span class="line"><span>    def bad(lvl,eloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            enemy = Enemy(eloc[0],eloc[1],&#39;yeti.png&#39;) # 生成敌人</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group() # 创建敌人组</span></span>
<span class="line"><span>            enemy_list.add(enemy)              # 将敌人添加到敌人组</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return enemy_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def loot(lvl,lloc):</span></span>
<span class="line"><span>        print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>        ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            while i &lt; len(gloc):</span></span>
<span class="line"><span>                ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                ground_list.add(ground)</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def platform(lvl,tx,ty):</span></span>
<span class="line"><span>        plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        ploc = []</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            ploc.append((0,worldy-ty-128,3))</span></span>
<span class="line"><span>            ploc.append((300,worldy-ty-256,3))</span></span>
<span class="line"><span>            ploc.append((500,worldy-ty-128,4))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            while i &lt; len(ploc):</span></span>
<span class="line"><span>                j=0</span></span>
<span class="line"><span>                while j &lt;= ploc[i][2]:</span></span>
<span class="line"><span>                    plat = Platform((ploc[i][0]+(j*tx)),ploc[i][1],tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                    plat_list.add(plat)</span></span>
<span class="line"><span>                    j=j+1</span></span>
<span class="line"><span>                print(&#39;run&#39; + str(i) + str(ploc[i]))</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return plat_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Setup</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40 # 帧率</span></span>
<span class="line"><span>ani = 4  # 动画循环</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE  = (25,25,200)</span></span>
<span class="line"><span>BLACK = (23,23,23 )</span></span>
<span class="line"><span>WHITE = (254,254,254)</span></span>
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player() # 生成玩家</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10 # how fast to move</span></span>
<span class="line"><span>jump = -24</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [200,20]</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span>#gloc = [0,630,64,630,128,630,192,630,256,630,320,630,384,630]</span></span>
<span class="line"><span>tx = 64 # 瓷砖尺寸</span></span>
<span class="line"><span>ty = 64 # 瓷砖尺寸</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span>plat_list = Level.platform( 1,tx,ty )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>主循环</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                print(&quot;LEFT&quot;)</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                print(&quot;RIGHT&quot;)</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(plat_list)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#    world.fill(BLACK)</span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.gravity() # 检查重力</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) # 刷新玩家位置</span></span>
<span class="line"><span>    enemy_list.draw(world)  # 刷新敌人</span></span>
<span class="line"><span>    ground_list.draw(world)  # 刷新地面</span></span>
<span class="line"><span>    plat_list.draw(world)   # 刷新平台</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div>`,48)),a("p",null,[s[5]||(s[5]=n("本期是使用 ",-1)),l(p,{href:"https://www.pygame.org/"},{default:e(()=>[...s[3]||(s[3]=[n("Pygame",-1)])]),_:1}),s[6]||(s[6]=n(" 模块在 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[4]||(s[4]=[n("Python 3",-1)])]),_:1}),s[7]||(s[7]=n(" 中创建视频游戏连载系列的第 7 期。往期文章为：",-1))]),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("通过构建一个简单的掷骰子游戏去学习怎么用 Python 编程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("使用 Python 和 Pygame 模块构建一个游戏框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("如何在你的 Python 游戏中添加一个玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("用 Pygame 使你的游戏角色移动起来",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[12]||(s[12]=[n("如何向你的 Python 游戏中添加一个敌人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[13]||(s[13]=[n("在 Pygame 游戏中放置平台",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[14]||(s[14]=[n("在你的 Python 游戏中模拟引力",-1)])]),_:1})])]),s[34]||(s[34]=a("hr",null,null,-1)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/19/12/jumping-python-platformer-game"},{default:e(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/12/jumping-python-platformer-game",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[17]||(s[17]=[n("Seth Kenlon",-1)])]),_:1}),s[22]||(s[22]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 译者：",-1)),l(p,{href:"https://github.com/cycoe"},{default:e(()=>[...s[19]||(s[19]=[n("cycoe",-1)])]),_:1}),s[24]||(s[24]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const b=i(d,[["render",f]]);export{v as __pageData,b as default};
