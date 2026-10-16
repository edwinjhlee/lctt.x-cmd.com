import{_ as t,a0 as o,w as r,s as c,I as l,x as n,a1 as p,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"用 Pygame 使你的游戏角色移动起来 | LCTT x X-CMD","titleTemplate":false,"description":"用 Pygame 使你的游戏角色移动起来 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Pygame 使你的游戏角色移动起来 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Pygame 使你的游戏角色移动起来 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20181218 Using Pygame to move your game character around","title":"用 Pygame 使你的游戏角色移动起来","tag":"201905","desc":""},"relativePath":"201905/20181218 Using Pygame to move your game character around.md","filePath":"[post].md"}'),d={name:"201905/20181218 Using Pygame to move your game character around.md"};function g(y,s,f,m,h,k){const a=o("Link");return r(),c("div",null,[s[27]||(s[27]=l("h1",{id:"用-pygame-使你的游戏角色移动起来",tabindex:"-1"},[n("用 Pygame 使你的游戏角色移动起来 "),l("a",{class:"header-anchor",href:"#用-pygame-使你的游戏角色移动起来","aria-label":"Permalink to “用 Pygame 使你的游戏角色移动起来”"},"​")],-1)),s[28]||(s[28]=l("blockquote",null,[l("p",null,"在本系列的第四部分，学习如何编写移动游戏角色的控制代码。")],-1)),s[29]||(s[29]=l("p",null,[l("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/python4-game.png?itok=tXFHaLdt",alt:""})],-1)),l("p",null,[s[3]||(s[3]=n("在这个系列的第一篇文章中，我解释了如何使用 Python 创建一个简单的",-1)),p(a,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("基于文本的骰子游戏",-1)])]),_:1}),s[4]||(s[4]=n("。在第二部分中，我向你们展示了如何从头开始构建游戏，即从 ",-1)),p(a,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("创建游戏的环境",-1)])]),_:1}),s[5]||(s[5]=n(" 开始。然后在第三部分，我们",-1)),p(a,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("创建了一个玩家妖精",-1)])]),_:1}),s[6]||(s[6]=n("，并且使它在你的（而不是空的）游戏世界内生成。你可能已经注意到，如果你不能移动你的角色，那么游戏不是那么有趣。在本篇文章中，我们将使用 Pygame 来添加键盘控制，如此一来你就可以控制你的角色的移动。",-1))]),s[30]||(s[30]=i(`<p>在 Pygame 中有许多函数可以用来添加（除键盘外的）其他控制，但如果你正在敲击 Python 代码，那么你一定是有一个键盘的，这将成为我们接下来会使用的控制方式。一旦你理解了键盘控制，你可以自己去探索其他选项。</p><p>在本系列的第二篇文章中，你已经为退出游戏创建了一个按键，移动角色的（按键）原则也是相同的。但是，使你的角色移动起来要稍微复杂一点。</p><p>让我们从简单的部分入手：设置控制器按键。</p><h3 id="为控制你的玩家妖精设置按键" tabindex="-1">为控制你的玩家妖精设置按键 <a class="header-anchor" href="#为控制你的玩家妖精设置按键" aria-label="Permalink to “为控制你的玩家妖精设置按键”">​</a></h3><p>在 IDLE、Ninja-IDE 或文本编辑器中打开你的 Python 游戏脚本。</p><p>因为游戏需要时刻“监听”键盘事件，所以你写的代码需要连续运行。你知道应该把需要在游戏周期中持续运行的代码放在哪里吗？</p><p>如果你回答“放在主循环中”，那么你是正确的！记住除非代码在循环中，否则（大多数情况下）它只会运行仅一次。如果它被写在一个从未被使用的类或函数中，它可能根本不会运行。</p><p>要使 Python 监听传入的按键，将如下代码添加到主循环。目前的代码还不能产生任何的效果，所以使用 <code>print</code> 语句来表示成功的信号。这是一种常见的调试技术。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                print(&#39;left&#39;)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                print(&#39;right&#39;)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>	            print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                print(&#39;left stop&#39;)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                print(&#39;right stop&#39;)</span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span></code></pre></div><p>一些人偏好使用键盘字母 <code>W</code>、<code>A</code>、<code>S</code> 和 <code>D</code> 来控制玩家角色，而另一些偏好使用方向键。因此确保你包含了两种选项。</p><p>注意：当你在编程时，同时考虑所有用户是非常重要的。如果你写代码只是为了自己运行，那么很可能你会成为你写的程序的唯一用户。更重要的是，如果你想找一个通过写代码赚钱的工作，你写的代码就应该让所有人都能运行。给你的用户选择权，比如提供使用方向键或 WASD 的选项，是一个优秀程序员的标志。</p><p>使用 Python 启动你的游戏，并在你按下“上下左右”方向键或 <code>A</code>、<code>D</code> 和 <code>W</code> 键的时候查看控制台窗口的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python ./your-name_game.py</span></span>
<span class="line"><span>  left</span></span>
<span class="line"><span>  left stop</span></span>
<span class="line"><span>  right</span></span>
<span class="line"><span>  right stop</span></span>
<span class="line"><span>  jump</span></span></code></pre></div><p>这验证了 Pygame 可以正确地检测按键。现在是时候来完成使妖精移动的艰巨任务了。</p><h3 id="编写玩家移动函数" tabindex="-1">编写玩家移动函数 <a class="header-anchor" href="#编写玩家移动函数" aria-label="Permalink to “编写玩家移动函数”">​</a></h3><p>为了使你的妖精移动起来，你必须为你的妖精创建一个属性代表移动。当你的妖精没有在移动时，这个变量被设为 <code>0</code>。</p><p>如果你正在为你的妖精设置动画，或者你决定在将来为它设置动画，你还必须跟踪帧来使走路循环保持在轨迹上。</p><p>在 <code>Player</code> 类中创建如下变量。开头两行作为上下文对照（如果你一直跟着做，你的代码中就已经有这两行），因此只需要添加最后三行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0 # 沿 X 方向移动</span></span>
<span class="line"><span>        self.movey = 0 # 沿 Y 方向移动</span></span>
<span class="line"><span>        self.frame = 0 # 帧计数</span></span></code></pre></div><p>设置好了这些变量，是时候去为妖精移动编写代码了。</p><p>玩家妖精不需要时刻响应控制，有时它并没有在移动。控制妖精的代码，仅仅只是玩家妖精所有能做的事情中的一小部分。在 Python 中，当你想要使一个对象做某件事并独立于剩余其他代码时，你可以将你的新代码放入一个函数。Python 的函数以关键词 <code>def</code> 开头，（该关键词）代表了定义函数。</p><p>在你的 <code>Player</code> 类中创建如下函数，来为你的妖精在屏幕上的位置增加几个像素。现在先不要担心你增加几个像素，这将在后续的代码中确定。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        控制玩家移动</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span></code></pre></div><p>为了在 Pygame 中移动妖精，你需要告诉 Python 在新的位置重绘妖精，以及这个新位置在哪里。</p><p>因为玩家妖精并不总是在移动，所以更新只需要是 Player 类中的一个函数。将此函数添加前面创建的 <code>control</code> 函数之后。</p><p>要使妖精看起来像是在行走（或者飞行，或是你的妖精应该做的任何事），你需要在按下适当的键时改变它在屏幕上的位置。要让它在屏幕上移动，你需要将它的位置（由 <code>self.rect.x</code> 和 <code>self.rect.y</code> 属性指定）重新定义为当前位置加上已应用的任意 <code>movex</code> 或 <code>movey</code>。（移动的像素数量将在后续进行设置。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        更新妖精位置</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span></code></pre></div><p>对 Y 方向做同样的处理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span></code></pre></div><p>对于动画，在妖精移动时推进动画帧，并使用相应的动画帧作为玩家的图像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        # 向左移动</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移动</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span></code></pre></div><p>通过设置一个变量来告诉代码为你的妖精位置增加多少像素，然后在触发你的玩家妖精的函数时使用这个变量。</p><p>首先，在你的设置部分创建这个变量。在如下代码中，开头两行是上下文对照，因此只需要在你的脚本中增加第三行代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10  # 移动多少个像素</span></span></code></pre></div><p>现在你已经有了适当的函数和变量，使用你的按键来触发函数并将变量传递给你的妖精。</p><p>为此，将主循环中的 <code>print</code> 语句替换为玩家妖精的名字（<code>player</code>）、函数（<code>.control</code>）以及你希望玩家妖精在每个循环中沿 X 轴和 Y 轴移动的步数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span></code></pre></div><p>记住，<code>steps</code> 变量代表了当一个按键被按下时，你的妖精会移动多少个像素。如果当你按下 <code>D</code> 或右方向键时，你的妖精的位置增加了 10 个像素。那么当你停止按下这个键时，你必须（将 <code>step</code>）减 10（<code>-steps</code>）来使你的妖精的动量回到 0。</p><p>现在尝试你的游戏。注意：它不会像你预想的那样运行。</p><p>为什么你的妖精仍无法移动？因为主循环还没有调用 <code>update</code> 函数。</p><p>将如下代码加入到你的主循环中来告诉 Python 更新你的玩家妖精的位置。增加带注释的那行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    player.update()  # 更新玩家位置</span></span>
<span class="line"><span>    player_list.draw(world)</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><p>再次启动你的游戏来见证你的玩家妖精在你的命令下在屏幕上来回移动。现在还没有垂直方向的移动，因为这部分函数会被重力控制，不过这是另一篇文章中的课程了。</p>`,43)),l("p",null,[s[9]||(s[9]=n("与此同时，如果你拥有一个摇杆，你可以尝试阅读 Pygame 中 ",-1)),p(a,{href:"http://pygame.org/docs/ref/joystick.html"},{default:e(()=>[...s[7]||(s[7]=[n("joystick",-1)])]),_:1}),s[10]||(s[10]=n(" 模块相关的文档，看看你是否能通过这种方式让你的妖精移动起来。或者，看看你是否能通过",-1)),p(a,{href:"http://pygame.org/docs/ref/mouse.html#module-pygame.mouse"},{default:e(()=>[...s[8]||(s[8]=[n("鼠标",-1)])]),_:1}),s[11]||(s[11]=n("与你的妖精互动。",-1))]),s[31]||(s[31]=i(`<p>最重要的是，玩的开心！</p><h3 id="本教程中用到的所有代码" tabindex="-1">本教程中用到的所有代码 <a class="header-anchor" href="#本教程中用到的所有代码" aria-label="Permalink to “本教程中用到的所有代码”">​</a></h3><p>为了方便查阅，以下是目前本系列文章用到的所有代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># 绘制世界</span></span>
<span class="line"><span># 添加玩家和玩家控制</span></span>
<span class="line"><span># 添加玩家移动控制</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Objects</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    生成玩家</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1,5):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;,&#39;hero&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect  = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        控制玩家移动</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        更新妖精位置</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向左移动</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移动</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>设置</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40        # 帧刷新率</span></span>
<span class="line"><span>ani = 4        # 动画循环</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE  = (25,25,200)</span></span>
<span class="line"><span>BLACK = (23,23,23 )</span></span>
<span class="line"><span>WHITE = (254,254,254)</span></span>
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player()   # 生成玩家</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10      # 移动速度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>主循环</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#    world.fill(BLACK)</span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) # 更新玩家位置</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><p>你已经学了很多，但还仍有许多可以做。在接下来的几篇文章中，你将实现添加敌方妖精、模拟重力等等。与此同时，练习 Python 吧！</p><hr>`,6)),l("p",null,[s[13]||(s[13]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/17/12/game-python-moving-player"},{default:e(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/17/12/game-python-moving-player",-1)])]),_:1})]),l("p",null,[s[18]||(s[18]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[14]||(s[14]=[n("Seth Kenlon",-1)])]),_:1}),s[19]||(s[19]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 译者：",-1)),p(a,{href:"https://github.com/cycoe"},{default:e(()=>[...s[16]||(s[16]=[n("cycoe",-1)])]),_:1}),s[21]||(s[21]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中国",-1)])]),_:1}),s[26]||(s[26]=n(" 荣誉推出",-1))])])}const x=t(d,[["render",g]]);export{b as __pageData,x as default};
