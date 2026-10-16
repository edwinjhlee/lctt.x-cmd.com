import{_ as i,a0 as t,w as r,s as c,I as a,x as n,a1 as l,A as e,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"在你的 Python 遊戲中添加投擲機制 | LCTT x X-CMD","titleTemplate":false,"description":"在你的 Python 遊戲中添加投擲機制 | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在你的 Python 遊戲中添加投擲機制 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在你的 Python 遊戲中添加投擲機制 | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20200918 Add throwing mechanics to your Python game","title":"在你的 Python 遊戲中添加投擲機制","tag":"202011","desc":""},"relativePath":"202011/20200918 Add throwing mechanics to your Python game.md","filePath":"[post].md"}'),f={name:"202011/20200918 Add throwing mechanics to your Python game.md"};function d(g,s,y,m,u,h){const p=t("Link");return r(),c("div",null,[s[42]||(s[42]=a("h1",{id:"在你的-python-遊戲中添加投擲機制",tabindex:"-1"},[n("在你的 Python 遊戲中添加投擲機制 "),a("a",{class:"header-anchor",href:"#在你的-python-遊戲中添加投擲機制","aria-label":"Permalink to “在你的 Python 遊戲中添加投擲機制”"},"​")],-1)),s[43]||(s[43]=a("blockquote",null,[a("p",null,"四處奔跑躲避敵人是一回事，反擊敵人是另一回事。學習如何在這系列的第十二篇文章中在 Pygame 中創建平台遊戲。")],-1)),s[44]||(s[44]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202011/30/124457xcj9mztw9kx9c7zj.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("這是仍在進行中的關於使用 ",-1)),l(p,{href:"https://www.pygame.org/news"},{default:e(()=>[...s[0]||(s[0]=[n("Pygame",-1)])]),_:1}),s[3]||(s[3]=n(" 模組在 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[1]||(s[1]=[n("Python 3",-1)])]),_:1}),s[4]||(s[4]=n(" 中創建電腦遊戲的第十二部分。先前的文章是：",-1))]),a("ol",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[5]||(s[5]=[n("通過構建一個簡單的擲骰子游戲去學習怎麼用 Python 編程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[6]||(s[6]=[n("使用 Python 和 Pygame 模組構建一個遊戲框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[7]||(s[7]=[n("如何在你的 Python 遊戲中添加一個玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("用 Pygame 使你的遊戲角色移動起來",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("如何向你的 Python 遊戲中添加一個敵人",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10902-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("在 Pygame 遊戲中放置平台",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11780-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("在你的 Python 遊戲中模擬引力",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11790-1.html"},{default:e(()=>[...s[12]||(s[12]=[n("為你的 Python 平台類遊戲添加跳躍功能",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11819-1.html"},{default:e(()=>[...s[13]||(s[13]=[n("使你的 Python 遊戲玩家能夠向前和向後跑",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11828-1.html"},{default:e(()=>[...s[14]||(s[14]=[n("在你的 Python 平台類遊戲中放一些獎勵",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-11839-1.html"},{default:e(()=>[...s[15]||(s[15]=[n("添加計分到你的 Python 遊戲",-1)])]),_:1})])]),s[45]||(s[45]=a("p",null,"我的上一篇文章本來是這一系列文章的最後一篇，它鼓勵你為這個遊戲編寫自己的附加程序。你們很多人都這麼做了！我收到了一些電子郵件，要求幫助我還沒有涵蓋的常用機制：戰鬥。畢竟，跳起來躲避壞人是一回事，但是有時候讓他們走開是一件非常令人滿意的事。在電腦遊戲中向你的敵人投擲一些物品是很常見的，不管是一個火球、一支箭、一道閃電，還是其它適合遊戲的東西。",-1)),s[46]||(s[46]=a("p",null,[n("與迄今為止你在這個系列中為你的平台遊戲編程的任何東西不同，可投擲物品有一個"),a("em",null,"生存時間"),n("。在你投擲一個物品後，它會如期在移動一段距離後消失。如果它是一支箭或其它類似的東西，它可能會在通過屏幕的邊緣時而消失。如果它是一個火球或一道閃電，它可能會在一段時間後熄滅。")],-1)),s[47]||(s[47]=a("p",null,"這意味着每次生成一個可投擲的物品時，也必須生成一個獨特的衡量其生存時間的標準。為了介紹這個概念，這篇文章演示如何一次只投擲一個物品。（換句話説，每次僅存在一個投擲物品）。 一方面，這是一個遊戲的限制條件，但另一方面，它卻是遊戲本身的運行機制。你的玩家不能每次同時投擲 50 個火球，因為每次僅允許一個投擲物品，所以當你的玩家釋放一個火球來嘗試擊中一名敵人就成為了一項挑戰。而在幕後，這也使你的代碼保持簡單。",-1)),s[48]||(s[48]=a("p",null,"如果你想啓用每次投擲多個項目，在完成這篇教程後，通過學習這篇教程所獲取的知識來挑戰你自己。",-1)),s[49]||(s[49]=a("h3",{id:"創建-throwable-類",tabindex:"-1"},[n("創建 Throwable 類 "),a("a",{class:"header-anchor",href:"#創建-throwable-類","aria-label":"Permalink to “創建 Throwable 類”"},"​")],-1)),a("p",null,[s[18]||(s[18]=n("如果你跟隨學習這系列的其它文章，那麼你應該熟悉在屏幕上生成一個新的對象基礎的 ",-1)),s[19]||(s[19]=a("code",null,"__init__",-1)),s[20]||(s[20]=n(" 函數。這和你用來生成你的 ",-1)),l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[16]||(s[16]=[n("玩家",-1)])]),_:1}),s[21]||(s[21]=n(" 和 ",-1)),l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[17]||(s[17]=[n("敵人",-1)])]),_:1}),s[22]||(s[22]=n(" 的函數是一樣的。這裏是生成一個 ",-1)),s[23]||(s[23]=a("code",null,"throwable",-1)),s[24]||(s[24]=n(" 對象的 ",-1)),s[25]||(s[25]=a("code",null,"__init__",-1)),s[26]||(s[26]=n(" 函數來：",-1))]),s[50]||(s[50]=o(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Throwable(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    生成一個 throwable 對象</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    def __init__(self, x, y, img, throw):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect   = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.firing = throw</span></span></code></pre></div><p>同你的 <code>Player</code> 類或 <code>Enemy</code> 類的 <code>__init__</code> 函數相比，這個函數的主要區別是，它有一個 <code>self.firing</code> 變量。這個變量保持跟蹤一個投擲的物品是否在當前屏幕上活動，因此當一個 <code>throwable</code> 對象創建時，將變量設置為 <code>1</code> 的合乎情理的。</p><h3 id="判斷存活時間" tabindex="-1">判斷存活時間 <a class="header-anchor" href="#判斷存活時間" aria-label="Permalink to “判斷存活時間”">​</a></h3><p>接下來，就像使用 <code>Player</code> 和 <code>Enemy</code> 一樣，你需要一個 <code>update</code> 函數，以便投擲的物品在瞄準敵人拋向空中時，它會自己移動。</p><p>測定一個投擲的物品存活時間的最簡單方法是偵測它何時離開屏幕。你需要監視的屏幕邊緣取決於你投擲的物品的物理特性。</p><ul><li>如果你的玩家正在投擲的物品是沿着水平軸快速移動的，像一隻弩箭或箭或一股非常快的魔法力量，而你想監視你遊戲屏幕的水平軸極限。這可以通過 <code>worldx</code> 定義。</li><li>如果你的玩家正在投擲的物品是沿着垂直方向或同時沿着水平方向和垂直方向移動的，那麼你必須監視你遊戲屏幕的垂直軸極限。這可以通過 <code>worldy</code> 定義。</li></ul><p>這個示例假設你投擲的物品向前移動一點並最終落到地面上。不過，投擲的物品不會從地面上反彈起來，而是繼續掉落出屏幕。你可以嘗試不同的設置來看看什麼最適合你的遊戲：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def update(self,worldy):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        投擲物理學</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        if self.rect.y &lt; worldy:   #垂直軸 </span></span>
<span class="line"><span>            self.rect.x  += 15     #它向前移動的速度有多快</span></span>
<span class="line"><span>            self.rect.y  += 5      #它掉落的速度有多快</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.kill()            #移除投擲對象</span></span>
<span class="line"><span>            self.firing = 0        #解除火力發射</span></span></code></pre></div><p>為使你的投擲物品移動地更快，增加 <code>self.rect</code> 的動量值。</p><p>如果投擲物品不在屏幕上，那麼該物品將被銷燬，以及釋放其所佔用的寄存器。另外，<code>self.firing</code> 將被設置回 <code>0</code> 以允許你的玩家來進行另一次射擊。</p><h3 id="設置你的投擲對象" tabindex="-1">設置你的投擲對象 <a class="header-anchor" href="#設置你的投擲對象" aria-label="Permalink to “設置你的投擲對象”">​</a></h3><p>就像使用你的玩家和敵人一樣，你必須在你的設置部分中創建一個精靈組來保持投擲對象。</p><p>此外，你必須創建一個非活動的投擲對象來供開始的遊戲使用。如果在遊戲開始時卻沒有一個投擲對象，那麼玩家在第一次嘗試投擲一柄武器時，投擲將失敗。</p><p>這個示例假設你的玩家使用一個火球作為開始的武器，因此，每一個投擲實例都是由 <code>fire</code> 變量指派的。在後面的關卡中，當玩家獲取新的技能時，你可以使用相同的 <code>Throwable</code> 類來引入一個新的變量以使用一張不同的圖像。</p><p>在這代碼塊中，前兩行已經在你的代碼中，因此不要重新鍵入它們:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>player_list = pygame.sprite.Group() #上下文</span></span>
<span class="line"><span>player_list.add(player)             #上下文</span></span>
<span class="line"><span>fire = Throwable(player.rect.x,player.rect.y,&#39;fire.png&#39;,0)</span></span>
<span class="line"><span>firepower = pygame.sprite.Group()</span></span></code></pre></div><p>注意，每一個投擲對象的起始位置都是和玩家所在的位置相同。這使得它看起來像是投擲對象來自玩家。在第一個火球生成時，使用 <code>0</code> 來顯示 <code>self.firing</code> 是可用的。</p><h3 id="在主循環中獲取投擲行為" tabindex="-1">在主循環中獲取投擲行為 <a class="header-anchor" href="#在主循環中獲取投擲行為" aria-label="Permalink to “在主循環中獲取投擲行為”">​</a></h3><p>沒有在主循環中出現的代碼不會在遊戲中使用，因此你需要在你的主循環中添加一些東西，以便能在你的遊戲世界中獲取投擲對象。</p><p>首先，添加玩家控制。當前，你沒有火力觸發器。在鍵盤上的按鍵是有兩種狀態的：釋放的按鍵，按下的按鍵。為了移動，你要使用這兩種狀態：按下按鍵來啓動玩家移動，釋放按鍵來停止玩家移動。開火僅需要一個信號。你使用哪個按鍵事件（按鍵按下或按鍵釋放）來觸發你的投擲對象取決於你的品味。</p><p>在這個代碼語句塊中，前兩行是用於上下文的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(platform_list)</span></span>
<span class="line"><span>            if event.key == pygame.K_SPACE:</span></span>
<span class="line"><span>                if not fire.firing:</span></span>
<span class="line"><span>                    fire = Throwable(player.rect.x,player.rect.y,&#39;fire.png&#39;,1)</span></span>
<span class="line"><span>                    firepower.add(fire)</span></span></code></pre></div><p>與你在設置部分創建的火球不同，你使用一個 <code>1</code> 來設置 <code>self.firing</code> 為不可用。</p><p>最後，你必須更新和繪製你的投擲物品。這個順序很重要，因此把這段代碼放置到你現有的 <code>enemy.move</code> 和 <code>player_list.draw</code> 的代碼行之間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    enemy.move()  # 上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if fire.firing:</span></span>
<span class="line"><span>        fire.update(worldy)</span></span>
<span class="line"><span>        firepower.draw(world)</span></span>
<span class="line"><span>    player_list.draw(screen)  # 上下文</span></span>
<span class="line"><span>    enemy_list.draw(screen)   # 上下文</span></span></code></pre></div><p>注意，這些更新僅在 <code>self.firing</code> 變量被設置為 1 時執行。如果它被設置為 0 ，那麼 <code>fire.firing</code> 就不為 <code>true</code>，接下來就跳過更新。如果你嘗試做上述這些更新，不管怎樣，你的遊戲都會崩潰，因為在遊戲中將不會更新或繪製一個 <code>fire</code> 對象。</p><p>啓動你的遊戲，嘗試挑戰你的武器。</p><h3 id="檢測碰撞" tabindex="-1">檢測碰撞 <a class="header-anchor" href="#檢測碰撞" aria-label="Permalink to “檢測碰撞”">​</a></h3><p>如果你玩使用了新投擲技巧的遊戲，你可能會注意到，你可以投擲對象，但是它卻不會對你的敵人有任何影響。</p><p>原因是你的敵人沒有被查到碰撞事故。一名敵人可能會被你的投擲物品所擊中，但是敵人卻從來不知道被擊中了。</p><p>你已經在你的 <code>Player</code> 類中完成了碰撞檢測，這非常類似。在你的 <code>Enemy</code> 類中，添加一個新的 <code>update</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    def update(self,firepower, enemy_list):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        檢測火力碰撞</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        fire_hit_list = pygame.sprite.spritecollide(self,firepower,False)</span></span>
<span class="line"><span>        for fire in fire_hit_list:</span></span>
<span class="line"><span>            enemy_list.remove(self)</span></span></code></pre></div><p>代碼很簡單。每個敵人對象都檢查並看看它自己是否被 <code>firepower</code> 精靈組的成員所擊中。如果它被擊中，那麼敵人就會從敵人組中移除和消失。</p><p>為集成這些功能到你的遊戲之中，在主循環中調用位於新觸發語句塊中的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    if fire.firing:                             # 上下文</span></span>
<span class="line"><span>        fire.update(worldy)                     # 上下文</span></span>
<span class="line"><span>        firepower.draw(screen)                  # 上下文</span></span>
<span class="line"><span>        enemy_list.update(firepower,enemy_list) # 更新敵人</span></span></code></pre></div><p>你現在可以嘗試一下你的遊戲了，大多數的事情都如預期般的那樣工作。不過，這裏仍然有一個問題，那就是投擲的方向。</p><h3 id="更改投擲機制的方向" tabindex="-1">更改投擲機制的方向 <a class="header-anchor" href="#更改投擲機制的方向" aria-label="Permalink to “更改投擲機制的方向”">​</a></h3><p>當前，你英雄的火球只會向右移動。這是因為 <code>Throwable</code> 類的 <code>update</code> 函數將像素添加到火球的位置，在 Pygame 中，在 X 軸上一個較大的數字意味着向屏幕的右側移動。當你的英雄轉向另一個方向時，你可能希望它投擲的火球也拋向左側。</p><p>到目前為止，你已經知道如何實現這一點，至少在技術上是這樣的。然而，最簡單的解決方案卻是使用一個變量，在一定程度上對你來説可能是一種新的方法。一般來説，你可以“設置一個標記”（有時也被稱為“翻轉一個位”）來標明你的英雄所面向的方向。在你做完後，你就可以檢查這個變量來得知火球是向左移動還是向右移動。</p><p>首先，在你的 <code>Player</code> 類中創建一個新的變量來代表你的遊戲所面向的方向。因為我的遊戲天然地面向右側，由此我把面向右側作為默認值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.score = 0</span></span>
<span class="line"><span>        self.facing_right = True  # 添加這行</span></span>
<span class="line"><span>        self.is_jumping = True</span></span></code></pre></div><p>當這個變量是 <code>True</code> 時，你的英雄精靈是面向右側的。當玩家每次更改英雄的方向時，變量也必須重新設置，因此，在你的主循環中相關的 <code>keyup</code> 事件中這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps, 0)</span></span>
<span class="line"><span>                player.facing_right = False  # 添加這行</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps, 0)</span></span>
<span class="line"><span>                player.facing_right = True   # 添加這行</span></span></code></pre></div><p>最後，更改你的 <code>Throwable</code> 類的 <code>update</code> 函數，以檢測英雄是否面向右側，並恰當地添加或減去來自火球位置的像素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.rect.y &lt; worldy:</span></span>
<span class="line"><span>            if player.facing_right:</span></span>
<span class="line"><span>                self.rect.x += 15</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.x -= 15</span></span>
<span class="line"><span>            self.rect.y += 5</span></span></code></pre></div><p>再次嘗試你的遊戲，清除掉你遊戲世界中的一些壞人。</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-throw.jpg" alt="Python 平台類使用投擲能力" title="Python platformer with throwing capability"></p><p>作為一項額外的挑戰，當徹底打敗敵人時，嘗試增加你玩家的得分。</p><h3 id="完整的代碼" tabindex="-1">完整的代碼 <a class="header-anchor" href="#完整的代碼" aria-label="Permalink to “完整的代碼”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>變量</span></span>
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
<span class="line"><span>對象</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def stats(score, health):</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 4), &quot;Score:&quot;+str(score), BLUE, None, size=64)</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 72), &quot;Health:&quot;+str(health), BLUE, None, size=64)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Throwable(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    生成一個投擲的對象</span></span>
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
<span class="line"><span>        投擲物理學</span></span>
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
<span class="line"><span># x 位置, y 位置, img 寬度, img 高度, img 文件</span></span>
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
<span class="line"><span>        控制玩家移動</span></span>
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
<span class="line"><span>        更新精靈位置</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向左移動</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.is_jumping = True</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; 3 * ani:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = pygame.transform.flip(self.images[self.frame // ani], True, False)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 向右移動</span></span>
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
<span class="line"><span>                self.damage = 0   # 設置傷害回 0</span></span>
<span class="line"><span>                self.health -= 1  # 減去 1 單位健康度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.bottom = g.rect.top</span></span>
<span class="line"><span>            self.is_jumping = False  # 停止跳躍</span></span>
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
<span class="line"><span>            self.is_jumping = False  # 停止跳躍</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.bottom &lt;= p.rect.bottom:</span></span>
<span class="line"><span>               self.rect.bottom = p.rect.top</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>               self.movey += 3.2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.is_jumping and self.is_falling is False:</span></span>
<span class="line"><span>            self.is_falling = True</span></span>
<span class="line"><span>            self.movey -= 33  # 跳躍多高</span></span>
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
<span class="line"><span>    生成一名敵人</span></span>
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
<span class="line"><span>        敵人移動</span></span>
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
<span class="line"><span>        檢測火力碰撞</span></span>
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
<span class="line"><span>    # x 位置, y 位置, img 寬度, img 高度, img 文件</span></span>
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
<span class="line"><span>player.rect.x = 0         # 轉到 x</span></span>
<span class="line"><span>player.rect.y = 30        # 轉到 y</span></span>
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
<span class="line"><span>主循環</span></span>
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
<span class="line"><span>    # 向向滾動世界</span></span>
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
<span class="line"><span>    # 向後滾動世界</span></span>
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
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,51)),a("p",null,[s[28]||(s[28]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/20/9/add-throwing-python-game"},{default:e(()=>[...s[27]||(s[27]=[n("https://opensource.com/article/20/9/add-throwing-python-game",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[29]||(s[29]=[n("Seth Kenlon",-1)])]),_:1}),s[34]||(s[34]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[30]||(s[30]=[n("lujun9972",-1)])]),_:1}),s[35]||(s[35]=n(" 譯者：",-1)),l(p,{href:"https://github.com/robsean"},{default:e(()=>[...s[31]||(s[31]=[n("robsean",-1)])]),_:1}),s[36]||(s[36]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[32]||(s[32]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[39]||(s[39]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[37]||(s[37]=[n("LCTT",-1)])]),_:1}),s[40]||(s[40]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[38]||(s[38]=[n("Linux中國",-1)])]),_:1}),s[41]||(s[41]=n(" 榮譽推出",-1))])])}const x=i(f,[["render",d]]);export{_ as __pageData,x as default};
