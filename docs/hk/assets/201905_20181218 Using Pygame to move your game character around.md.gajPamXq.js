import{_ as t,a0 as o,w as r,s as c,I as l,x as n,a1 as p,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"用 Pygame 使你的遊戲角色移動起來 | LCTT x X-CMD","titleTemplate":false,"description":"用 Pygame 使你的遊戲角色移動起來 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Pygame 使你的遊戲角色移動起來 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Pygame 使你的遊戲角色移動起來 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20181218 Using Pygame to move your game character around","title":"用 Pygame 使你的遊戲角色移動起來","tag":"201905","desc":""},"relativePath":"201905/20181218 Using Pygame to move your game character around.md","filePath":"[post].md"}'),d={name:"201905/20181218 Using Pygame to move your game character around.md"};function g(y,s,f,m,h,k){const a=o("Link");return r(),c("div",null,[s[27]||(s[27]=l("h1",{id:"用-pygame-使你的遊戲角色移動起來",tabindex:"-1"},[n("用 Pygame 使你的遊戲角色移動起來 "),l("a",{class:"header-anchor",href:"#用-pygame-使你的遊戲角色移動起來","aria-label":"Permalink to “用 Pygame 使你的遊戲角色移動起來”"},"​")],-1)),s[28]||(s[28]=l("blockquote",null,[l("p",null,"在本系列的第四部分，學習如何編寫移動遊戲角色的控制代碼。")],-1)),s[29]||(s[29]=l("p",null,[l("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/python4-game.png?itok=tXFHaLdt",alt:""})],-1)),l("p",null,[s[3]||(s[3]=n("在這個系列的第一篇文章中，我解釋瞭如何使用 Python 創建一個簡單的",-1)),p(a,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("基於文本的骰子游戲",-1)])]),_:1}),s[4]||(s[4]=n("。在第二部分中，我向你們展示瞭如何從頭開始構建遊戲，即從 ",-1)),p(a,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("創建遊戲的環境",-1)])]),_:1}),s[5]||(s[5]=n(" 開始。然後在第三部分，我們",-1)),p(a,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("創建了一個玩家妖精",-1)])]),_:1}),s[6]||(s[6]=n("，並且使它在你的（而不是空的）遊戲世界內生成。你可能已經注意到，如果你不能移動你的角色，那麼遊戲不是那麼有趣。在本篇文章中，我們將使用 Pygame 來添加鍵盤控制，如此一來你就可以控制你的角色的移動。",-1))]),s[30]||(s[30]=i(`<p>在 Pygame 中有許多函數可以用來添加（除鍵盤外的）其他控制，但如果你正在敲擊 Python 代碼，那麼你一定是有一個鍵盤的，這將成為我們接下來會使用的控制方式。一旦你理解了鍵盤控制，你可以自己去探索其他選項。</p><p>在本系列的第二篇文章中，你已經為退出遊戲創建了一個按鍵，移動角色的（按鍵）原則也是相同的。但是，使你的角色移動起來要稍微複雜一點。</p><p>讓我們從簡單的部分入手：設置控制器按鍵。</p><h3 id="為控制你的玩家妖精設置按鍵" tabindex="-1">為控制你的玩家妖精設置按鍵 <a class="header-anchor" href="#為控制你的玩家妖精設置按鍵" aria-label="Permalink to “為控制你的玩家妖精設置按鍵”">​</a></h3><p>在 IDLE、Ninja-IDE 或文本編輯器中打開你的 Python 遊戲腳本。</p><p>因為遊戲需要時刻“監聽”鍵盤事件，所以你寫的代碼需要連續運行。你知道應該把需要在遊戲週期中持續運行的代碼放在哪裏嗎？</p><p>如果你回答“放在主循環中”，那麼你是正確的！記住除非代碼在循環中，否則（大多數情況下）它只會運行僅一次。如果它被寫在一個從未被使用的類或函數中，它可能根本不會運行。</p><p>要使 Python 監聽傳入的按鍵，將如下代碼添加到主循環。目前的代碼還不能產生任何的效果，所以使用 <code>print</code> 語句來表示成功的信號。這是一種常見的調試技術。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while main == True:</span></span>
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
<span class="line"><span>                main = False</span></span></code></pre></div><p>一些人偏好使用鍵盤字母 <code>W</code>、<code>A</code>、<code>S</code> 和 <code>D</code> 來控制玩家角色，而另一些偏好使用方向鍵。因此確保你包含了兩種選項。</p><p>注意：當你在編程時，同時考慮所有用户是非常重要的。如果你寫代碼只是為了自己運行，那麼很可能你會成為你寫的程序的唯一用户。更重要的是，如果你想找一個通過寫代碼賺錢的工作，你寫的代碼就應該讓所有人都能運行。給你的用户選擇權，比如提供使用方向鍵或 WASD 的選項，是一個優秀程序員的標誌。</p><p>使用 Python 啓動你的遊戲，並在你按下“上下左右”方向鍵或 <code>A</code>、<code>D</code> 和 <code>W</code> 鍵的時候查看控制台窗口的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python ./your-name_game.py</span></span>
<span class="line"><span>  left</span></span>
<span class="line"><span>  left stop</span></span>
<span class="line"><span>  right</span></span>
<span class="line"><span>  right stop</span></span>
<span class="line"><span>  jump</span></span></code></pre></div><p>這驗證了 Pygame 可以正確地檢測按鍵。現在是時候來完成使妖精移動的艱鉅任務了。</p><h3 id="編寫玩家移動函數" tabindex="-1">編寫玩家移動函數 <a class="header-anchor" href="#編寫玩家移動函數" aria-label="Permalink to “編寫玩家移動函數”">​</a></h3><p>為了使你的妖精移動起來，你必須為你的妖精創建一個屬性代表移動。當你的妖精沒有在移動時，這個變量被設為 <code>0</code>。</p><p>如果你正在為你的妖精設置動畫，或者你決定在將來為它設置動畫，你還必須跟蹤幀來使走路循環保持在軌跡上。</p><p>在 <code>Player</code> 類中創建如下變量。開頭兩行作為上下文對照（如果你一直跟着做，你的代碼中就已經有這兩行），因此只需要添加最後三行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0 # 沿 X 方向移動</span></span>
<span class="line"><span>        self.movey = 0 # 沿 Y 方向移動</span></span>
<span class="line"><span>        self.frame = 0 # 幀計數</span></span></code></pre></div><p>設置好了這些變量，是時候去為妖精移動編寫代碼了。</p><p>玩家妖精不需要時刻響應控制，有時它並沒有在移動。控制妖精的代碼，僅僅只是玩家妖精所有能做的事情中的一小部分。在 Python 中，當你想要使一個對象做某件事並獨立於剩餘其他代碼時，你可以將你的新代碼放入一個函數。Python 的函數以關鍵詞 <code>def</code> 開頭，（該關鍵詞）代表了定義函數。</p><p>在你的 <code>Player</code> 類中創建如下函數，來為你的妖精在屏幕上的位置增加幾個像素。現在先不要擔心你增加幾個像素，這將在後續的代碼中確定。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        控制玩家移動</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span></code></pre></div><p>為了在 Pygame 中移動妖精，你需要告訴 Python 在新的位置重繪妖精，以及這個新位置在哪裏。</p><p>因為玩家妖精並不總是在移動，所以更新只需要是 Player 類中的一個函數。將此函數添加前面創建的 <code>control</code> 函數之後。</p><p>要使妖精看起來像是在行走（或者飛行，或是你的妖精應該做的任何事），你需要在按下適當的鍵時改變它在屏幕上的位置。要讓它在屏幕上移動，你需要將它的位置（由 <code>self.rect.x</code> 和 <code>self.rect.y</code> 屬性指定）重新定義為當前位置加上已應用的任意 <code>movex</code> 或 <code>movey</code>。（移動的像素數量將在後續進行設置。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        更新妖精位置</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span></code></pre></div><p>對 Y 方向做同樣的處理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span></code></pre></div><p>對於動畫，在妖精移動時推進動畫幀，並使用相應的動畫幀作為玩家的圖像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        # 向左移動</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移動</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span></code></pre></div><p>通過設置一個變量來告訴代碼為你的妖精位置增加多少像素，然後在觸發你的玩家妖精的函數時使用這個變量。</p><p>首先，在你的設置部分創建這個變量。在如下代碼中，開頭兩行是上下文對照，因此只需要在你的腳本中增加第三行代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10  # 移動多少個像素</span></span></code></pre></div><p>現在你已經有了適當的函數和變量，使用你的按鍵來觸發函數並將變量傳遞給你的妖精。</p><p>為此，將主循環中的 <code>print</code> 語句替換為玩家妖精的名字（<code>player</code>）、函數（<code>.control</code>）以及你希望玩家妖精在每個循環中沿 X 軸和 Y 軸移動的步數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
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
<span class="line"><span>                main = False</span></span></code></pre></div><p>記住，<code>steps</code> 變量代表了當一個按鍵被按下時，你的妖精會移動多少個像素。如果當你按下 <code>D</code> 或右方向鍵時，你的妖精的位置增加了 10 個像素。那麼當你停止按下這個鍵時，你必須（將 <code>step</code>）減 10（<code>-steps</code>）來使你的妖精的動量回到 0。</p><p>現在嘗試你的遊戲。注意：它不會像你預想的那樣運行。</p><p>為什麼你的妖精仍無法移動？因為主循環還沒有調用 <code>update</code> 函數。</p><p>將如下代碼加入到你的主循環中來告訴 Python 更新你的玩家妖精的位置。增加帶註釋的那行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    player.update()  # 更新玩家位置</span></span>
<span class="line"><span>    player_list.draw(world)</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><p>再次啓動你的遊戲來見證你的玩家妖精在你的命令下在屏幕上來回移動。現在還沒有垂直方向的移動，因為這部分函數會被重力控制，不過這是另一篇文章中的課程了。</p>`,43)),l("p",null,[s[9]||(s[9]=n("與此同時，如果你擁有一個搖桿，你可以嘗試閲讀 Pygame 中 ",-1)),p(a,{href:"http://pygame.org/docs/ref/joystick.html"},{default:e(()=>[...s[7]||(s[7]=[n("joystick",-1)])]),_:1}),s[10]||(s[10]=n(" 模組相關的文檔，看看你是否能通過這種方式讓你的妖精移動起來。或者，看看你是否能通過",-1)),p(a,{href:"http://pygame.org/docs/ref/mouse.html#module-pygame.mouse"},{default:e(()=>[...s[8]||(s[8]=[n("鼠標",-1)])]),_:1}),s[11]||(s[11]=n("與你的妖精互動。",-1))]),s[31]||(s[31]=i(`<p>最重要的是，玩的開心！</p><h3 id="本教程中用到的所有代碼" tabindex="-1">本教程中用到的所有代碼 <a class="header-anchor" href="#本教程中用到的所有代碼" aria-label="Permalink to “本教程中用到的所有代碼”">​</a></h3><p>為了方便查閲，以下是目前本系列文章用到的所有代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># 繪製世界</span></span>
<span class="line"><span># 添加玩家和玩家控制</span></span>
<span class="line"><span># 添加玩家移動控制</span></span>
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
<span class="line"><span>        控制玩家移動</span></span>
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
<span class="line"><span>        # 向左移動</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移動</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3*ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>設置</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40        # 幀刷新率</span></span>
<span class="line"><span>ani = 4        # 動畫循環</span></span>
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
<span class="line"><span>steps = 10      # 移動速度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>主循環</span></span>
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
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><p>你已經學了很多，但還仍有許多可以做。在接下來的幾篇文章中，你將實現添加敵方妖精、模擬重力等等。與此同時，練習 Python 吧！</p><hr>`,6)),l("p",null,[s[13]||(s[13]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/17/12/game-python-moving-player"},{default:e(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/17/12/game-python-moving-player",-1)])]),_:1})]),l("p",null,[s[18]||(s[18]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[14]||(s[14]=[n("Seth Kenlon",-1)])]),_:1}),s[19]||(s[19]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 譯者：",-1)),p(a,{href:"https://github.com/cycoe"},{default:e(()=>[...s[16]||(s[16]=[n("cycoe",-1)])]),_:1}),s[21]||(s[21]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中國",-1)])]),_:1}),s[26]||(s[26]=n(" 榮譽推出",-1))])])}const x=t(d,[["render",g]]);export{b as __pageData,x as default};
