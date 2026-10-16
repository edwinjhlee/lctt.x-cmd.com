import{_ as i,a0 as t,w as r,s as c,I as a,x as n,a1 as l,A as e,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"使你的 Python 遊戲玩家能夠向前和向後跑 | LCTT x X-CMD","titleTemplate":false,"description":"使你的 Python 遊戲玩家能夠向前和向後跑 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使你的 Python 遊戲玩家能夠向前和向後跑 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使你的 Python 遊戲玩家能夠向前和向後跑 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20191211 Enable your Python game player to run forward and backward","title":"使你的 Python 遊戲玩家能夠向前和向後跑","tag":"202001","desc":""},"relativePath":"202001/20191211 Enable your Python game player to run forward and backward.md","filePath":"[post].md"}'),d={name:"202001/20191211 Enable your Python game player to run forward and backward.md"};function f(y,s,m,g,u,h){const p=t("Link");return r(),c("div",null,[s[30]||(s[30]=a("h1",{id:"使你的-python-遊戲玩家能夠向前和向後跑",tabindex:"-1"},[n("使你的 Python 遊戲玩家能夠向前和向後跑 "),a("a",{class:"header-anchor",href:"#使你的-python-遊戲玩家能夠向前和向後跑","aria-label":"Permalink to “使你的 Python 遊戲玩家能夠向前和向後跑”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"使用 Pygame 模組來使你的 Python 平台開啓側滾效果，來讓你的玩家自由奔跑。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/25/220636x5mabbl47xvtsk55.jpg",alt:""})],-1)),s[33]||(s[33]=a("p",null,"這是仍在進行中的關於使用 Pygame 模組來在 Python 3 中在創建電腦遊戲的第九部分。先前的文章是：",-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("通過構建一個簡單的擲骰子游戲去學習怎麼用 Python 編程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("使用 Python 和 Pygame 模組構建一個遊戲框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("如何在你的 Python 遊戲中添加一個玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[3]||(s[3]=[n("用 Pygame 使你的遊戲角色移動起來",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[4]||(s[4]=[n("如何向你的 Python 遊戲中添加一個敵人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[5]||(s[5]=[n("在 Pygame 遊戲中放置平台",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[6]||(s[6]=[n("在你的 Python 遊戲中模擬引力",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11790-1.html"},{default:e(()=>[...s[7]||(s[7]=[n("為你的 Python 平台類遊戲添加跳躍功能",-1)])]),_:1})])]),a("p",null,[s[10]||(s[10]=n("在這一系列關於使用 ",-1)),l(p,{href:"https://www.pygame.org/news"},{default:e(()=>[...s[8]||(s[8]=[n("Pygame",-1)])]),_:1}),s[11]||(s[11]=n(" 模組來在 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[9]||(s[9]=[n("Python 3",-1)])]),_:1}),s[12]||(s[12]=n(" 中創建電腦遊戲的先前文章中，你已經設計了你的關卡設計佈局，但是你的關卡的一些部分可能已近超出你的屏幕的可視區域。在平台類遊戲中，這個問題的普遍解決方案是，像術語“",-1)),s[13]||(s[13]=a("ruby",null,[n("側滾"),a("rt",null,"side-scroller")],-1)),s[14]||(s[14]=n("”表明的一樣，滾動。",-1))]),s[34]||(s[34]=o(`<p>滾動的關鍵是當玩家精靈接近屏的幕邊緣時，使在玩家精靈周圍的平台移動。這樣給予一種錯覺，屏幕是一個在遊戲世界中穿梭追拍的&quot;攝像機&quot;。</p><p>這個滾動技巧需要兩個在屏幕邊緣的絕對區域，在絕對區域內的點處，在世界滾動期間，你的化身靜止不動。</p><h3 id="在側滾動條中放置卷軸" tabindex="-1">在側滾動條中放置卷軸 <a class="header-anchor" href="#在側滾動條中放置卷軸" aria-label="Permalink to “在側滾動條中放置卷軸”">​</a></h3><p>如果你希望你的玩家能夠後退，你需要一個觸發點來向前和向後。這兩個點僅僅是兩個變量。設置它們各個距各個屏幕邊緣大約 100 或 200 像素。在你的設置部分中創建變量。在下面的代碼中，前兩行用於上下文説明，所以僅需要添加這行後的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10</span></span>
<span class="line"><span>forwardX  = 600</span></span>
<span class="line"><span>backwardX = 230</span></span></code></pre></div><p>在主循環中，查看你的玩家精靈是否在 <code>forwardx</code> 或 <code>backwardx</code> 滾動點處。如果是這樣，向左或向右移動使用的平台，取決於世界是向前或向後移動。在下面的代碼中，代碼的最後三行僅供你參考：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        # scroll the world forward</span></span>
<span class="line"><span>        if player.rect.x &gt;= forwardx:</span></span>
<span class="line"><span>                scroll = player.rect.x - forwardx</span></span>
<span class="line"><span>                player.rect.x = forwardx</span></span>
<span class="line"><span>                for p in plat_list:</span></span>
<span class="line"><span>                        p.rect.x -= scroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # scroll the world backward</span></span>
<span class="line"><span>        if player.rect.x &lt;= backwardx:</span></span>
<span class="line"><span>                scroll = backwardx - player.rect.x</span></span>
<span class="line"><span>                player.rect.x = backwardx</span></span>
<span class="line"><span>                for p in plat_list:</span></span>
<span class="line"><span>                        p.rect.x += scroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ## scrolling code above</span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.gravity() # check gravity</span></span>
<span class="line"><span>    player.update()</span></span></code></pre></div><p>啓動你的遊戲，並嘗試它。</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-scroll.jpg" alt="Scrolling the world in Pygame" title="Scrolling the world in Pygame"></p><p>滾動像預期的一樣工作，但是你可能注意到一個發生的小問題，當你滾動你的玩家和非玩家精靈周圍的世界時：敵人精靈不隨同世界滾動。除非你要你的敵人精靈要無休止地追逐你的玩家，你需要修改敵人代碼，以便當你的玩家快速撤退時，敵人被留在後面。</p><h3 id="敵人卷軸" tabindex="-1">敵人卷軸 <a class="header-anchor" href="#敵人卷軸" aria-label="Permalink to “敵人卷軸”">​</a></h3><p>在你的主循環中，你必須對卷軸平台為你的敵人的位置的應用相同的規則。因為你的遊戲世界將（很可能）有不止一個敵人在其中，該規則應該被應用於你的敵人列表，而不是一個單獨的敵人精靈。這是分組類似元素到列表中的優點之一。</p><p>前兩行用於上下文註釋，所以只需添加這兩行後面的代碼到你的主循環中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    # scroll the world forward</span></span>
<span class="line"><span>    if player.rect.x &gt;= forwardx:</span></span>
<span class="line"><span>        scroll = player.rect.x - forwardx</span></span>
<span class="line"><span>        player.rect.x = forwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x -= scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x -= scroll</span></span></code></pre></div><p>來滾向另一個方向：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    # scroll the world backward</span></span>
<span class="line"><span>    if player.rect.x &lt;= backwardx:</span></span>
<span class="line"><span>        scroll = backwardx - player.rect.x</span></span>
<span class="line"><span>        player.rect.x = backwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x += scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x += scroll</span></span></code></pre></div><p>再次啓動遊戲，看看發生什麼。</p><p>這裏是到目前為止你已經為這個 Python 平台所寫所有的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span># add gravity</span></span>
<span class="line"><span># add jumping</span></span>
<span class="line"><span># add scrolling</span></span>
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
<span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            #print(self.health)</span></span>
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
<span class="line"><span>steps = 10</span></span>
<span class="line"><span>forwardx = 600</span></span>
<span class="line"><span>backwardx = 230</span></span>
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
<span class="line"><span>               </span></span>
<span class="line"><span>    # scroll the world backward</span></span>
<span class="line"><span>    if player.rect.x &lt;= backwardx:</span></span>
<span class="line"><span>        scroll = backwardx - player.rect.x</span></span>
<span class="line"><span>        player.rect.x = backwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x += scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x += scroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.gravity() # check gravity</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) #refresh player position</span></span>
<span class="line"><span>    enemy_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    ground_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    plat_list.draw(world)   # refresh platforms</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,20)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/19/12/python-platformer-game-run"},{default:e(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/12/python-platformer-game-run",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[17]||(s[17]=[n("Seth Kenlon",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),l(p,{href:"https://github.com/robsean"},{default:e(()=>[...s[19]||(s[19]=[n("robsean",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const v=i(d,[["render",f]]);export{k as __pageData,v as default};
