import{_ as i,a0 as t,w as r,s as o,I as a,x as n,a1 as l,A as e,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在你的 Python 游戏中模拟引力 | LCTT x X-CMD","titleTemplate":false,"description":"在你的 Python 游戏中模拟引力 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在你的 Python 游戏中模拟引力 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在你的 Python 游戏中模拟引力 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20191121 Simulate gravity in your Python game","title":"在你的 Python 游戏中模拟引力","tag":"202001","desc":""},"relativePath":"202001/20191121 Simulate gravity in your Python game.md","filePath":"[post].md"}'),y={name:"202001/20191121 Simulate gravity in your Python game.md"};function d(f,s,m,g,u,h){const p=t("Link");return r(),o("div",null,[s[29]||(s[29]=a("h1",{id:"在你的-python-游戏中模拟引力",tabindex:"-1"},[n("在你的 Python 游戏中模拟引力 "),a("a",{class:"header-anchor",href:"#在你的-python-游戏中模拟引力","aria-label":"Permalink to “在你的 Python 游戏中模拟引力”"},"​")],-1)),s[30]||(s[30]=a("blockquote",null,[a("p",null,"学习如何使用 Python 的 Pygame 模块编程电脑游戏，并开始操作引力。")],-1)),s[31]||(s[31]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/13/223923k6t4zmvvmo6tfmmg.png",alt:""})],-1)),s[32]||(s[32]=a("p",null,[n("真实的世界充满了运动和生活。物理学使得真实的生活如此忙碌和动态。物理学是物质在空间中运动的方式。既然一个电脑游戏世界没有物质，它也就没有物理学规律，使用游戏程序员不得不"),a("em",null,"模拟"),n("物理学。")],-1)),s[33]||(s[33]=a("p",null,"从大多数电脑游戏来说，这里基本上仅有两个方面的物理学是重要的：引力和碰撞。",-1)),a("p",null,[s[1]||(s[1]=n("当你",-1)),l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("添加一个敌人",-1)])]),_:1}),s[2]||(s[2]=n("到你的游戏中时，你实现了一些碰撞检测，但是这篇文章要添加更多的东西，因为引力需要碰撞检测。想想为什么引力可能涉及碰撞。如果你不能想到任何原因，不要担心 —— 它会随着你开发示例代码工作而且显然。",-1))]),s[34]||(s[34]=c(`<p>在真实世界中的引力是有质量的物体来相互吸引的倾向性。物体（质量）越大，它施加越大的引力作用。在电脑游戏物理学中，你不必创建质量足够大的物体来证明引力的正确；你可以在电脑游戏世界本身中仅编程一个物体落向假设的最大的对象的倾向。</p><h3 id="添加一个引力函数" tabindex="-1">添加一个引力函数 <a class="header-anchor" href="#添加一个引力函数" aria-label="Permalink to “添加一个引力函数”">​</a></h3><p>记住你的玩家已经有了一个决定动作的属性。使用这个属性来将玩家精灵拉向屏幕底部。</p><p>在 Pygame 中，较高的数字更接近屏幕的底部边缘。</p><p>在真实的世界中，引力影响一切。然而，在平台游戏中，引力是有选择性的 —— 如果你添加引力到你的整个游戏世界，你的所有平台都将掉到地上。反之，你可以仅添加引力到你的玩家和敌人精灵中。</p><p>首先，在你的 <code>Player</code> 类中添加一个 <code>gravity</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # 玩家掉落的多快</span></span></code></pre></div><p>这是一个简单的函数。首先，不管你的玩家是否想运动，你设置你的玩家垂直运动。也就是说，你已经编程你的玩家总是在下降。这基本上就是引力。</p><p>为使引力函数生效，你必须在你的主循环中调用它。这样，当每一个处理循环时，Python 都应用下落运动到你的玩家。</p><p>在这代码中，添加第一行到你的循环中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    player.gravity() # 检查引力</span></span>
<span class="line"><span>    player.update()</span></span></code></pre></div><p>启动你的游戏来看看会发生什么。要注意，因为它发生的很快：你是玩家从天空上下落，马上掉出了你的游戏屏幕。</p><p>你的引力模拟是工作的，但是，也许太好了。</p><p>作为一次试验，尝试更改你玩家下落的速度。</p><h3 id="给引力添加一个地板" tabindex="-1">给引力添加一个地板 <a class="header-anchor" href="#给引力添加一个地板" aria-label="Permalink to “给引力添加一个地板”">​</a></h3><p>你的游戏没有办法发现你的角色掉落出世界的问题。在一些游戏中，如果一个玩家掉落出世界，该精灵被删除，并在某个新的位置重生。在另一些游戏中，玩家会丢失分数或一条生命。当一个玩家掉落出世界时，不管你想发生什么，你必须能够侦测出玩家何时消失在屏幕外。</p><p>在 Python 中，要检查一个条件，你可以使用一个 <code>if</code> 语句。</p><p>你必需查看你玩家<strong>是否</strong>正在掉落，以及你的玩家掉落的程度。如果你的玩家掉落到屏幕的底部，那么你可以做<em>一些事情</em>。简化一下，设置玩家精灵的位置为底部边缘上方 20 像素。</p><p>使你的 <code>gravity</code> 函数看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # 玩家掉落的多快</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.rect.y &gt; worldy and self.movey &gt;= 0:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty</span></span></code></pre></div><p>然后，启动你的游戏。你的精灵仍然下落，但是它停在屏幕的底部。不过，你也许不能<em>看到</em>你在地面层之上的精灵。一个简单的解决方法是，在精灵碰撞游戏世界的底部后，通过添加另一个 <code>-ty</code> 到它的新 Y 位置，从而使你的精灵弹跳到更高处：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # 玩家掉落的多快</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.rect.y &gt; worldy and self.movey &gt;= 0:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span></code></pre></div><p>现在你的玩家在屏幕底部弹跳，恰好在你地面精灵上面。</p><p>你的玩家真正需要的是反抗引力的方法。引力问题是，你不能反抗它，除非你有一些东西来推开引力作用。因此，在接下来的文章中，你将添加地面和平台碰撞以及跳跃能力。在这期间，尝试应用引力到敌人精灵。</p><p>到目前为止，这里是全部的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span># add gravity</span></span>
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
<span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # how fast player falls</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.rect.y &gt; worldy and self.movey &gt;= 0:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
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
<span class="line"><span></span></span>
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
<span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn an enemy</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self,x,y,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        #self.image.convert_alpha()</span></span>
<span class="line"><span>        #self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        enemy movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance*2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>    def loot(lvl,lloc):</span></span>
<span class="line"><span>        print(lvl)</span></span>
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
<span class="line"><span>            ploc.append((0,worldy-ty-128,3))</span></span>
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
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player() # spawn player</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10 # how fast to move</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [200,20]</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span>#gloc = [0,630,64,630,128,630,192,630,256,630,320,630,384,630]</span></span>
<span class="line"><span>tx = 64 #tile size</span></span>
<span class="line"><span>ty = 64 #tile size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span>plat_list = Level.platform( 1,tx,ty )</span></span>
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
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.gravity() # check gravity</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world)</span></span>
<span class="line"><span>    enemy_list.draw(world)</span></span>
<span class="line"><span>    ground_list.draw(world)</span></span>
<span class="line"><span>    plat_list.draw(world)</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,27)),a("p",null,[s[5]||(s[5]=n("这是仍在进行中的关于使用 ",-1)),l(p,{href:"https://www.pygame.org"},{default:e(()=>[...s[3]||(s[3]=[n("Pygame",-1)])]),_:1}),s[6]||(s[6]=n(" 模块来在 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[4]||(s[4]=[n("Python 3",-1)])]),_:1}),s[7]||(s[7]=n(" 在创建电脑游戏的第七部分。先前的文章是：",-1))]),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("通过构建一个简单的掷骰子游戏去学习怎么用 Python 编程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("使用 Python 和 Pygame 模块构建一个游戏框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("如何在你的 Python 游戏中添加一个玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("用 Pygame 使你的游戏角色移动起来",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[12]||(s[12]=[n("如何向你的 Python 游戏中添加一个敌人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[13]||(s[13]=[n("在 Pygame 游戏中放置平台",-1)])]),_:1})])]),s[35]||(s[35]=a("hr",null,null,-1)),a("p",null,[s[15]||(s[15]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/19/11/simulate-gravity-python"},{default:e(()=>[...s[14]||(s[14]=[n("https://opensource.com/article/19/11/simulate-gravity-python",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[16]||(s[16]=[n("Seth Kenlon",-1)])]),_:1}),s[21]||(s[21]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[17]||(s[17]=[n("lujun9972",-1)])]),_:1}),s[22]||(s[22]=n(" 译者：",-1)),l(p,{href:"https://github.com/robsean"},{default:e(()=>[...s[18]||(s[18]=[n("robsean",-1)])]),_:1}),s[23]||(s[23]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[25]||(s[25]=[n("Linux中国",-1)])]),_:1}),s[28]||(s[28]=n(" 荣誉推出",-1))])])}const b=i(y,[["render",d]]);export{x as __pageData,b as default};
