import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"為你的 Python 平台類遊戲添加跳躍功能 | LCTT x X-CMD","titleTemplate":false,"description":"為你的 Python 平台類遊戲添加跳躍功能 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"為你的 Python 平台類遊戲添加跳躍功能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"為你的 Python 平台類遊戲添加跳躍功能 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20191205 Add jumping to your Python platformer game","title":"為你的 Python 平台類遊戲添加跳躍功能","tag":"202001","desc":""},"relativePath":"202001/20191205 Add jumping to your Python platformer game.md","filePath":"[post].md"}'),d={name:"202001/20191205 Add jumping to your Python platformer game.md"};function f(m,s,y,g,u,h){const p=t("Link");return c(),o("div",null,[s[30]||(s[30]=a("h1",{id:"為你的-python-平台類遊戲添加跳躍功能",tabindex:"-1"},[n("為你的 Python 平台類遊戲添加跳躍功能 "),a("a",{class:"header-anchor",href:"#為你的-python-平台類遊戲添加跳躍功能","aria-label":"Permalink to “為你的 Python 平台類遊戲添加跳躍功能”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"在本期使用 Python Pygame 模組編寫視頻遊戲中，學會如何使用跳躍來對抗重力。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/16/214917c8mxn82fot82fx88.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在本系列的 ",-1)),l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("前一篇文章",-1)])]),_:1}),s[2]||(s[2]=n(" 中，你已經模擬了重力。但現在，你需要賦予你的角色跳躍的能力來對抗重力。",-1))]),s[33]||(s[33]=r(`<p>跳躍是對重力作用的暫時延緩。在這一小段時間裏，你是向<em>上</em>跳，而不是被重力拉着向下落。但你一旦到達了跳躍的最高點，重力就會重新發揮作用，將你拉回地面。</p><p>在代碼中，這種變化被表示為變量。首先，你需要為玩家精靈建立一個變量，使得 Python 能夠跟蹤該精靈是否正在跳躍中。一旦玩家精靈開始跳躍，他就會再次受到重力的作用，並被拉回最近的物體。</p><h3 id="設置跳躍狀態變量" tabindex="-1">設置跳躍狀態變量 <a class="header-anchor" href="#設置跳躍狀態變量" aria-label="Permalink to “設置跳躍狀態變量”">​</a></h3><p>你需要為你的 <code>Player</code> 類添加兩個新變量：</p><ul><li>一個是為了跟蹤你的角色是否正在跳躍中，可通過你的玩家精靈是否站在堅實的地面來確定</li><li>一個是為了將玩家帶回地面</li></ul><p>將如下兩個變量添加到你的 <code>Player</code> 類中。在下方的代碼中，註釋前的部分用於提示上下文，因此只需要添加最後兩行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                self.movex = 0</span></span>
<span class="line"><span>                self.movey = 0</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>                self.health = 10</span></span>
<span class="line"><span>                # 此處是重力相關變量</span></span>
<span class="line"><span>                self.collide_delta = 0</span></span>
<span class="line"><span>                self.jump_delta = 6</span></span></code></pre></div><p>第一個變量 <code>collide_delta</code> 被設為 0 是因為在正常狀態下，玩家精靈沒有處在跳躍中的狀態。另一個變量 <code>jump_delta</code> 被設為 6，是為了防止精靈在第一次進入遊戲世界時就發生反彈（實際上就是跳躍）。當你完成了本篇文章的示例，嘗試把該變量設為 0 看看會發生什麼。</p><h3 id="跳躍中的碰撞" tabindex="-1">跳躍中的碰撞 <a class="header-anchor" href="#跳躍中的碰撞" aria-label="Permalink to “跳躍中的碰撞”">​</a></h3><p>如果你是跳到一個蹦牀上，那你的跳躍一定非常優美。但是如果你是跳向一面牆會發生什麼呢？（千萬不要去嘗試！）不管你的起跳多麼令人印象深刻，當你撞到比你更大更硬的物體時，你都會立馬停下。（LCTT 譯註：原理參考動量守恆定律）</p><p>為了在你的視頻遊戲中模擬這一點，你需要在你的玩家精靈與地面等東西發生碰撞時，將 <code>self.collide_delta</code> 變量設為 0。如果你的 <code>self.collide_delta</code> 不是 0 而是其它的什麼值，那麼你的玩家就會發生跳躍，並且當你的玩家與牆或者地面發生碰撞時無法跳躍。</p><p>在你的 <code>Player</code> 類的 <code>update</code> 方法中，將地面碰撞相關代碼塊修改為如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span>            self.collide_delta = 0 # 停止跳躍</span></span>
<span class="line"><span>            if self.rect.y &gt; g.rect.y:</span></span>
<span class="line"><span>                self.health -=1</span></span>
<span class="line"><span>                print(self.health)</span></span></code></pre></div><p>這段代碼塊檢查了地面精靈和玩家精靈之間發生的碰撞。當發生碰撞時，它會將玩家 Y 方向的座標值設置為遊戲窗口的高度減去一個瓷磚的高度再減去另一個瓷磚的高度。以此保證了玩家精靈是站在地面<em>上</em>，而不是嵌在地面裏。同時它也將 <code>self.collide_delta</code> 設為 0，使得程序能夠知道玩家未處在跳躍中。除此之外，它將 <code>self.movey</code> 設為 0，使得程序能夠知道玩家當前未受到重力的牽引作用（這是遊戲物理引擎的奇怪之處，一旦玩家落地，也就沒有必要繼續將玩家拉向地面）。</p><p>此處 <code>if</code> 語句用來檢測玩家是否已經落到地面之<em>下</em>，如果是，那就扣除一點生命值作為懲罰。此處假定了你希望當你的玩家落到地圖之外時失去生命值。這個設定不是必需的，它只是平台類遊戲的一種慣例。更有可能的是，你希望這個事件能夠觸發另一些事件，或者説是一種能夠讓你的現實世界玩家沉迷於讓精靈掉到屏幕之外的東西。一種簡單的恢復方式是在玩家精靈掉落到地圖之外時，將 <code>self.rect.y</code> 重新設置為 0，這樣它就會在地圖上方重新生成，並落到堅實的地面上。</p><h3 id="撞向地面" tabindex="-1">撞向地面 <a class="header-anchor" href="#撞向地面" aria-label="Permalink to “撞向地面”">​</a></h3><p>模擬的重力使你玩家的 Y 座標不斷增大（LCTT 譯註：此處原文中為 0，但在 Pygame 中越靠下方 Y 座標應越大）。要實現跳躍，完成如下代碼使你的玩家精靈離開地面，飛向空中。</p><p>在你的 <code>Player</code> 類的 <code>update</code> 方法中，添加如下代碼來暫時延緩重力的作用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.collide_delta &lt; 6 and self.jump_delta &lt; 6:</span></span>
<span class="line"><span>            self.jump_delta = 6*2</span></span>
<span class="line"><span>            self.movey -= 33  # 跳躍的高度</span></span>
<span class="line"><span>            self.collide_delta += 6</span></span>
<span class="line"><span>            self.jump_delta    += 6</span></span></code></pre></div><p>根據此代碼所示，跳躍使玩家精靈向空中移動了 33 個像素。此處是<em>負</em> 33 是因為在 Pygame 中，越小的數代表距離屏幕頂端越近。</p><p>不過此事件視條件而定，只有當 <code>self.collide_delta</code> 小於 6（缺省值定義在你 <code>Player</code> 類的 <code>init</code> 方法中）並且 <code>self.jump_delta</code> 也於 6 的時候才會發生。此條件能夠保證直到玩家碰到一個平台，才能觸發另一次跳躍。換言之，它能夠阻止空中二段跳。</p><p>在某些特殊條件下，你可能不想阻止空中二段跳，或者説你允許玩家進行空中二段跳。舉個栗子，如果玩家獲得了某個戰利品，那麼在他被敵人攻擊到之前，都能夠擁有空中二段跳的能力。</p><p>當你完成本篇文章中的示例，嘗試將 <code>self.collide_delta</code> 和 <code>self.jump_delta</code> 設置為 0，從而獲得百分之百的幾率觸發空中二段跳。</p><h3 id="在平台上着陸" tabindex="-1">在平台上着陸 <a class="header-anchor" href="#在平台上着陸" aria-label="Permalink to “在平台上着陸”">​</a></h3><p>目前你已經定義了在玩家精靈摔落地面時的抵抗重力條件，但此時你的遊戲代碼仍保持平台與地面置於不同的列表中（就像本文中做的很多其他選擇一樣，這個設定並不是必需的，你可以嘗試將地面作為另一種平台）。為了允許玩家精靈站在平台之上，你必須像檢測地面碰撞一樣，檢測玩家精靈與平台精靈之間的碰撞。將如下代碼放於你的 <code>update</code> 方法中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.collide_delta = 0 # 跳躍結束</span></span>
<span class="line"><span>            self.movey = 0</span></span></code></pre></div><p>但此處還有一點需要考慮：平台懸在空中，也就意味着玩家可以通過從上面或者從下面接觸平台來與之互動。</p><p>確定平台如何與玩家互動取決於你，阻止玩家從下方到達平台也並不稀奇。將如下代碼加到上方的代碼塊中，使得平台表現得像天花板或者説是藤架。只有在玩家精靈跳得比平台上沿更高時才能跳到平台上，但會阻止玩家從平台下方跳上來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span></code></pre></div><p>此處 <code>if</code> 語句代碼塊的第一個子句阻止玩家精靈從平台正下方跳到平台上。如果它檢測到玩家精靈的座標比平台更大（在 Pygame 中，座標更大意味着在屏幕的更下方），那麼將玩家精靈新的 Y 座標設置為當前平台的 Y 座標加上一個瓷磚的高度。實際效果就是保證玩家精靈距離平台一個瓷磚的高度，防止其從下方穿過平台。</p><p><code>else</code> 子句做了相反的事情。當程序運行到此處時，如果玩家精靈的 Y 座標<em>不</em>比平台的更大，意味着玩家精靈是從空中落下（不論是由於玩家剛剛從此處生成，或者是玩家執行了跳躍）。在這種情況下，玩家精靈的 Y 座標被設為平台的 Y 座標減去一個瓷磚的高度（切記，在 Pygame 中更小的 Y 座標代表在屏幕上的更高處）。這樣就能保證玩家在平台<em>上</em>，除非他從平台上跳下來或者走下來。</p><p>你也可以嘗試其他的方式來處理玩家與平台之間的互動。舉個栗子，也許玩家精靈被設定為處在平台的“前面”，他能夠無障礙地跳躍穿過平台並站在上面。或者你可以設計一種平台會減緩而又不完全阻止玩家的跳躍過程。甚至你可以通過將不同平台分到不同列表中來混合搭配使用。</p><h3 id="觸發一次跳躍" tabindex="-1">觸發一次跳躍 <a class="header-anchor" href="#觸發一次跳躍" aria-label="Permalink to “觸發一次跳躍”">​</a></h3><p>目前為此，你的代碼已經模擬了所有必需的跳躍條件，但仍缺少一個跳躍觸發器。你的玩家精靈的 <code>self.jump_delta</code> 初始值被設置為 6，只有當它比 6 小的時候才會觸發更新跳躍的代碼。</p><p>為跳躍變量設置一個新的設置方法，在你的 <code>Player</code> 類中創建一個 <code>jump</code> 方法，並將 <code>self.jump_delta</code> 設為小於 6 的值。通過使玩家精靈向空中移動 33 個像素，來暫時減緩重力的作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def jump(self,platform_list):</span></span>
<span class="line"><span>        self.jump_delta = 0</span></span></code></pre></div><p>不管你相信與否，這就是 <code>jump</code> 方法的全部。剩餘的部分在 <code>update</code> 方法中，你已經在前面實現了相關代碼。</p><p>要使你遊戲中的跳躍功能生效，還有最後一件事情要做。如果你想不起來是什麼，運行遊戲並觀察跳躍是如何生效的。</p><p>問題就在於你的主循環中沒有調用 <code>jump</code> 方法。先前你已經為該方法創建了一個按鍵佔位符，現在，跳躍鍵所做的就是將 <code>jump</code> 打印到終端。</p><h3 id="調用-jump-方法" tabindex="-1">調用 jump 方法 <a class="header-anchor" href="#調用-jump-方法" aria-label="Permalink to “調用 jump 方法”">​</a></h3><p>在你的主循環中，將<em>上</em>方向鍵的效果從打印一條調試語句，改為調用 <code>jump</code> 方法。</p><p>注意此處，與 <code>update</code> 方法類似，<code>jump</code> 方法也需要檢測碰撞，因此你需要告訴它使用哪個 <code>plat_list</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(plat_list)</span></span></code></pre></div><p>如果你傾向於使用空格鍵作為跳躍鍵，使用 <code>pygame.K_SPACE</code> 替代 <code>pygame.K_UP</code> 作為按鍵。另一種選擇，你可以同時使用兩種方式（使用單獨的 <code>if</code> 語句），給玩家多一種選擇。</p><p>現在來嘗試你的遊戲吧！在下一篇文章中，你將讓你的遊戲捲動起來。</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-jump.jpg" alt="Pygame 平台類遊戲" title="Pygame platformer"></p><p>以下是目前為止的所有代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>    # x 座標，y 座標，圖像寬度，圖像高度，圖像文件</span></span>
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
<span class="line"><span>    生成一個玩家</span></span>
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
<span class="line"><span>        控制玩家移動</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        更新精靈位置</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向左移動</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移動</span></span>
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
<span class="line"><span>    生成一個敵人</span></span>
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
<span class="line"><span>        敵人移動</span></span>
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
<span class="line"><span>            enemy = Enemy(eloc[0],eloc[1],&#39;yeti.png&#39;) # 生成敵人</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group() # 創建敵人組</span></span>
<span class="line"><span>            enemy_list.add(enemy)              # 將敵人添加到敵人組</span></span>
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
<span class="line"><span>fps = 40 # 幀率</span></span>
<span class="line"><span>ani = 4  # 動畫循環</span></span>
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
<span class="line"><span>tx = 64 # 瓷磚尺寸</span></span>
<span class="line"><span>ty = 64 # 瓷磚尺寸</span></span>
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
<span class="line"><span>主循環</span></span>
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
<span class="line"><span>    player.gravity() # 檢查重力</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) # 刷新玩家位置</span></span>
<span class="line"><span>    enemy_list.draw(world)  # 刷新敵人</span></span>
<span class="line"><span>    ground_list.draw(world)  # 刷新地面</span></span>
<span class="line"><span>    plat_list.draw(world)   # 刷新平台</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div>`,48)),a("p",null,[s[5]||(s[5]=n("本期是使用 ",-1)),l(p,{href:"https://www.pygame.org/"},{default:e(()=>[...s[3]||(s[3]=[n("Pygame",-1)])]),_:1}),s[6]||(s[6]=n(" 模組在 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[4]||(s[4]=[n("Python 3",-1)])]),_:1}),s[7]||(s[7]=n(" 中創建視頻遊戲連載系列的第 7 期。往期文章為：",-1))]),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("通過構建一個簡單的擲骰子游戲去學習怎麼用 Python 編程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("使用 Python 和 Pygame 模組構建一個遊戲框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("如何在你的 Python 遊戲中添加一個玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("用 Pygame 使你的遊戲角色移動起來",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[12]||(s[12]=[n("如何向你的 Python 遊戲中添加一個敵人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[13]||(s[13]=[n("在 Pygame 遊戲中放置平台",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[14]||(s[14]=[n("在你的 Python 遊戲中模擬引力",-1)])]),_:1})])]),s[34]||(s[34]=a("hr",null,null,-1)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/19/12/jumping-python-platformer-game"},{default:e(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/12/jumping-python-platformer-game",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[17]||(s[17]=[n("Seth Kenlon",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),l(p,{href:"https://github.com/cycoe"},{default:e(()=>[...s[19]||(s[19]=[n("cycoe",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const b=i(d,[["render",f]]);export{v as __pageData,b as default};
