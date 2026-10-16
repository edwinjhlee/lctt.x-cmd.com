import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在你的 Python 平台類遊戲中放一些獎勵 | LCTT x X-CMD","titleTemplate":false,"description":"在你的 Python 平台類遊戲中放一些獎勵 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在你的 Python 平台類遊戲中放一些獎勵 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在你的 Python 平台類遊戲中放一些獎勵 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200102 Put some loot in your Python platformer game","title":"在你的 Python 平台類遊戲中放一些獎勵","tag":"202001","desc":""},"relativePath":"202001/20200102 Put some loot in your Python platformer game.md","filePath":"[post].md"}'),d={name:"202001/20200102 Put some loot in your Python platformer game.md"};function f(y,s,g,m,h,u){const p=t("Link");return o(),c("div",null,[s[29]||(s[29]=a("h1",{id:"在你的-python-平台類遊戲中放一些獎勵",tabindex:"-1"},[n("在你的 Python 平台類遊戲中放一些獎勵 "),a("a",{class:"header-anchor",href:"#在你的-python-平台類遊戲中放一些獎勵","aria-label":"Permalink to “在你的 Python 平台類遊戲中放一些獎勵”"},"​")],-1)),s[30]||(s[30]=a("blockquote",null,[a("p",null,"這部分是關於在使用 Python 的 Pygame 模組開發的視頻遊戲總給你的玩家提供收集的寶物和經驗值的內容。")],-1)),s[31]||(s[31]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/29/131158jkwnhgd1nnawzn86.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("這是正在進行的關於使用 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[0]||(s[0]=[n("Python 3",-1)])]),_:1}),s[3]||(s[3]=n(" 的 ",-1)),l(p,{href:"https://www.pygame.org/news"},{default:e(()=>[...s[1]||(s[1]=[n("Pygame",-1)])]),_:1}),s[4]||(s[4]=n(" 模組創建視頻遊戲的系列文章的第十部分。以前的文章有:",-1))]),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[5]||(s[5]=[n("通過構建一個簡單的擲骰子游戲去學習怎麼用 Python 編程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[6]||(s[6]=[n("使用 Python 和 Pygame 模組構建一個遊戲框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[7]||(s[7]=[n("如何在你的 Python 遊戲中添加一個玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("用 Pygame 使你的遊戲角色移動起來",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("如何向你的 Python 遊戲中添加一個敵人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("在 Pygame 遊戲中放置平台",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("在你的 Python 遊戲中模擬引力",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11790-1.html"},{default:e(()=>[...s[12]||(s[12]=[n("為你的 Python 平台類遊戲添加跳躍功能",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11819-1.html"},{default:e(()=>[...s[13]||(s[13]=[n("使你的 Python 遊戲玩家能夠向前和向後跑",-1)])]),_:1})])]),s[32]||(s[32]=r(`<p>如果你已經閲讀了本系列的前幾篇文章，那麼你已經瞭解了編寫遊戲的所有基礎知識。現在你可以在這些基礎上，創造一個全功能的遊戲。當你第一次學習時，遵循本系列代碼示例，這樣的“用例”是有幫助的，但是，用例也會約束你。現在是時候運用你學到的知識，以新的方式應用它們了。</p><p>如果説，説起來容易做起來難，這篇文章展示了一個如何將你已經瞭解的內容用於新目的的例子中。具體來説，就是它涵蓋了如何使用你以前的課程中已經瞭解到的來實現獎勵系統。</p><p>在大多數電子遊戲中，你有機會在遊戲世界中獲得“獎勵”或收集到寶物和其他物品。獎勵通常會增加你的分數或者你的生命值，或者為你的下一次任務提供信息。</p><p>遊戲中包含的獎勵類似於編程平台。像平台一樣，獎勵沒有用户控制，隨着遊戲世界的滾動進行，並且必須檢查與玩家的碰撞。</p><h3 id="創建獎勵函數" tabindex="-1">創建獎勵函數 <a class="header-anchor" href="#創建獎勵函數" aria-label="Permalink to “創建獎勵函數”">​</a></h3><p>獎勵和平台非常相似，你甚至不需要一個獎勵的類。你可以重用 <code>Platform</code> 類，並將結果稱為“獎勵”。</p><p>由於獎勵類型和位置可能因關卡不同而不同，如果你還沒有，請在你的 <code>Level</code> 中創建一個名為 <code>loot</code> 的新函數。因為獎勵物品不是平台，你也必須創建一個新的 <code>loot_list</code> 組，然後添加獎勵物品。與平台、地面和敵人一樣，該組用於檢查玩家碰撞:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def loot(lvl,lloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            loot_list = pygame.sprite.Group()</span></span>
<span class="line"><span>            loot = Platform(300,ty*7,tx,ty, &#39;loot_1.png&#39;)</span></span>
<span class="line"><span>            loot_list.add(loot)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return loot_list</span></span></code></pre></div><p>你可以隨意添加任意數量的獎勵對象；記住把每一個都加到你的獎勵清單上。<code>Platform</code> 類的參數是獎勵圖標的 X 位置、Y 位置、寬度和高度（通常讓你的獎勵精靈保持和所有其他方塊一樣的大小最為簡單），以及你想要用作的獎勵的圖片。獎勵的放置可以和貼圖平台一樣複雜，所以使用創建關卡時需要的關卡設計文檔。</p><p>在腳本的設置部分調用新的獎勵函數。在下面的代碼中，前三行是上下文，所以只需添加第四行:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span>plat_list = Level.platform( 1,tx,ty )</span></span>
<span class="line"><span>loot_list = Level.loot(1,tx,ty)</span></span></code></pre></div><p>正如你現在所知道的，除非你把它包含在你的主循環中，否則獎勵不會被顯示到屏幕上。將下面代碼示例的最後一行添加到循環中:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    enemy_list.draw(world)</span></span>
<span class="line"><span>    ground_list.draw(world)</span></span>
<span class="line"><span>    plat_list.draw(world)</span></span>
<span class="line"><span>    loot_list.draw(world)</span></span></code></pre></div><p>啓動你的遊戲看看會發生什麼。</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-loot.jpg" alt="Loot in Python platformer" title="Loot in Python platformer"></p><p>你的獎勵將會顯示出來，但是當你的玩家碰到它們時，它們不會做任何事情，當你的玩家經過它們時，它們也不會滾動。接下來解決這些問題。</p><h3 id="滾動獎勵" tabindex="-1">滾動獎勵 <a class="header-anchor" href="#滾動獎勵" aria-label="Permalink to “滾動獎勵”">​</a></h3><p>像平台一樣，當玩家在遊戲世界中移動時，獎勵必須滾動。邏輯與平台滾動相同。要向前滾動獎勵物品，添加最後兩行:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x -= scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span>            l.rect.x -= scroll</span></span></code></pre></div><p>要向後滾動，請添加最後兩行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x += scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span>            l.rect.x += scroll</span></span></code></pre></div><p>再次啓動你的遊戲，看看你的獎勵物品現在表現得像在遊戲世界裏一樣了，而不是僅僅畫在上面。</p><h3 id="檢測碰撞" tabindex="-1">檢測碰撞 <a class="header-anchor" href="#檢測碰撞" aria-label="Permalink to “檢測碰撞”">​</a></h3><p>就像平台和敵人一樣，你可以檢查獎勵物品和玩家之間的碰撞。邏輯與其他碰撞相同，除了撞擊不會（必然）影響重力或生命值。取而代之的是，命中會導致獎勵物品會消失並增加玩家的分數。</p><p>當你的玩家觸摸到一個獎勵對象時，你可以從 <code>loot_list</code> 中移除該對象。這意味着當你的主循環在 <code>loot_list</code> 中重繪所有獎勵物品時，它不會重繪那個特定的對象，所以看起來玩家已經獲得了獎勵物品。</p><p>在 <code>Player</code> 類的 <code>update</code> 函數中的平台碰撞檢測之上添加以下代碼（最後一行僅用於上下文）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                loot_hit_list = pygame.sprite.spritecollide(self, loot_list, False)</span></span>
<span class="line"><span>                for loot in loot_hit_list:</span></span>
<span class="line"><span>                        loot_list.remove(loot)</span></span>
<span class="line"><span>                        self.score += 1</span></span>
<span class="line"><span>                print(self.score)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span></code></pre></div><p>當碰撞發生時，你不僅要把獎勵從它的組中移除，還要給你的玩家一個分數提升。你還沒有創建分數變量，所以請將它添加到你的玩家屬性中，該屬性是在 <code>Player</code> 類的 <code>__init__</code> 函數中創建的。在下面的代碼中，前兩行是上下文，所以只需添加分數變量:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.score = 0</span></span></code></pre></div><p>當在主循環中調用 <code>update</code> 函數時，需要包括 <code>loot_list</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        player.gravity()</span></span>
<span class="line"><span>        player.update()</span></span></code></pre></div><p>如你所見，你已經掌握了所有的基本知識。你現在要做的就是用新的方式使用你所知道的。</p><p>在下一篇文章中還有一些提示，但是與此同時，用你學到的知識來製作一些簡單的單關卡遊戲。限制你試圖創造的東西的範圍是很重要的，這樣你就不會埋沒自己。這也使得最終的成品看起來和感覺上更容易完成。</p><p>以下是迄今為止你為這個 Python 平台編寫的所有代碼:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>    world.blit(backdrop, backdropbox)    </span></span>
<span class="line"><span>    player.gravity() # check gravity</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) #refresh player position</span></span>
<span class="line"><span>    enemy_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    ground_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    plat_list.draw(world)   # refresh platforms</span></span>
<span class="line"><span>    loot_list.draw(world)   # refresh loot</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,36)),a("p",null,[s[15]||(s[15]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/20/1/loot-python-platformer-game"},{default:e(()=>[...s[14]||(s[14]=[n("https://opensource.com/article/20/1/loot-python-platformer-game",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[16]||(s[16]=[n("Seth Kenlon",-1)])]),_:1}),s[21]||(s[21]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[17]||(s[17]=[n("lujun9972",-1)])]),_:1}),s[22]||(s[22]=n(" 譯者：",-1)),l(p,{href:"https://github.com/heguangzhi"},{default:e(()=>[...s[18]||(s[18]=[n("heguangzhi",-1)])]),_:1}),s[23]||(s[23]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[25]||(s[25]=[n("Linux中國",-1)])]),_:1}),s[28]||(s[28]=n(" 榮譽推出",-1))])])}const x=i(d,[["render",f]]);export{v as __pageData,x as default};
